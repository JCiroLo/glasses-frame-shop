import { useState, useEffect, FC, ChangeEvent, FormEvent } from 'react'
import classnames from 'classnames'

import GlassFrame from '../services/GlassFrame'
import { GlassFrameType } from '../typings/custom'
import { formatText } from '../utils/Actions'
import { COLORS, MATERIALS, SHAPES } from '../utils/Consts'

import Icon from '../components/Icon'
import Input from '../components/Input'
import Frame from '../components/Frame'
import LoadingScreen from '../components/LoadingScreen'
import ButtonToggler from '../components/ButtonToggler'

import '../assets/css/Catalogue.scss'

const Catalogue: FC = () => {
  const [mounts, setMounts] = useState<GlassFrameType[]>([])
  const [loading, setLoading] = useState(true)
  const [sortingMode, setSortingMode] = useState('recent')
  const [searchQuery, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState<GlassFrameType[]>([])
  const [isSearch, setIsSearch] = useState(false)
  const [filterMode, setFilterMode] = useState({ mode: 'none', choice: 'none' })
  const [toggleFilters, setTogglerFilters] = useState<boolean>(
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  )

  const fetchData = async () => {
    const { status, data } = await GlassFrame.getAll()
    if (status) {
      setMounts(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    document.title = 'Catálogo'
    window.scrollTo(0, 0)
    fetchData()
    return () => {}
  }, [])

  /* Search */

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const submitSearch = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault()

    if (searchQuery.trim().length === 0) {
      deleteFilter()
      return
    }

    const arrSearch = searchQuery.trim().split(' ')

    let results: GlassFrameType[] = []

    arrSearch.forEach(search => {
      results = mounts.filter(frame => {
        if (
          verifyMatch(frame.brand, search) ||
          verifyMatch(frame.material, search) ||
          verifyMatch(frame.shape, search) ||
          verifyMatch(frame.color, search)
        ) {
          return frame
        }
        return null
      })
    })

    setIsSearch(true)
    setSearchResults(results)
  }

  /* Filters */

  const verifyMatch = (outerString: string, innerString: string) =>
    outerString.trim().toLowerCase().includes(innerString.trim().toLowerCase())

  const filterByColor = (color: string) => {
    setSearchResults(mounts.filter(frame => frame.color === color))
    setIsSearch(true)
    setFilterMode({ mode: 'color', choice: color })
  }

  const filterByMaterial = (material: string) => {
    setSearchResults(mounts.filter(frame => frame.material === material))
    setIsSearch(true)
    setFilterMode({ mode: 'material', choice: material })
  }

  const filterByShape = (shape: string) => {
    setSearchResults(mounts.filter(frame => frame.shape === shape))
    setIsSearch(true)
    setFilterMode({ mode: 'shape', choice: shape })
  }

  const deleteFilter = () => {
    setSearchResults([])
    setIsSearch(false)
    setFilterMode({ mode: 'none', choice: 'none' })
  }

  /* Sorter */

  const sorMounts = (mode: string) => {
    setSortingMode(mode)

    if (isSearch) {
      switch (mode) {
        case 'recent':
          searchResults.sort((x, y) => {
            let a = new Date(x.updatedAt)
            let b = new Date(y.updatedAt)
            return a.getMilliseconds() - b.getMilliseconds()
          })
          break
        case 'popular':
          alert('Ordenando por pularidad')
          break
        case 'lowToHigh':
          searchResults.sort((x, y) => {
            return (
              x.price * (1 - x.discount / 100) -
              y.price * (1 - y.discount / 100)
            )
          })
          break
        case 'highToLow':
          searchResults.sort((x, y) => {
            return (
              y.price * (1 - y.discount / 100) -
              x.price * (1 - x.discount / 100)
            )
          })
          break
        case 'discount':
          searchResults.sort((x, y) => {
            return y.discount - x.discount
          })
          break
      }
    } else {
      switch (mode) {
        case 'recent':
          mounts.sort((x, y) => {
            let a = new Date(x.updatedAt)
            let b = new Date(y.updatedAt)
            return a.getMilliseconds() - b.getMilliseconds()
          })
          break
        case 'popular':
          alert('Ordenando por pularidad')
          break
        case 'lowToHigh':
          mounts.sort((x, y) => {
            return (
              x.price * (1 - x.discount / 100) -
              y.price * (1 - y.discount / 100)
            )
          })
          break
        case 'highToLow':
          mounts.sort((x, y) => {
            return (
              y.price * (1 - y.discount / 100) -
              x.price * (1 - x.discount / 100)
            )
          })
          break
        case 'discount':
          mounts.sort((x, y) => {
            return y.discount - x.discount
          })
          break
      }
    }
  }

  /* Layout */

  return (
    <div className='catalogue-page'>
      {loading && <LoadingScreen />}

      <div className={classnames('filters', { active: !toggleFilters })}>
        <ButtonToggler
          state={toggleFilters}
          onClick={() => setTogglerFilters(prev => !prev)}
        />
        <section>
          <p className='filter-label'>
            <strong>Filtrar por color</strong>
            <u onClick={deleteFilter}>Limpiar</u>
          </p>
          <div className='colors'>
            {COLORS.map(({ id, color, style }) => (
              <span
                key={id}
                onClick={() => filterByColor(color)}
                style={style}
              />
            ))}
          </div>
        </section>

        <section>
          <p className='filter-label'>
            <strong>Filtrar por material</strong>
            <u onClick={deleteFilter}>Limpiar</u>
          </p>
          <div className='materials'>
            {MATERIALS.map(({ id, material }) => (
              <div key={id} onClick={() => filterByMaterial(material)}>
                <span>{formatText(material)}</span>
                <strong>
                  ({mounts.filter(frame => frame.material === material).length})
                </strong>
              </div>
            ))}
            <div onClick={deleteFilter}>
              <span>Todos</span>
              <strong>({mounts.length})</strong>
            </div>
          </div>
        </section>

        <section>
          <p className='filter-label'>
            <strong>Filtrar por forma</strong>
            <u onClick={deleteFilter}>Limpiar</u>
          </p>
          <div className='styles'>
            {SHAPES.map(({ id, shape }) => (
              <div key={id} onClick={() => filterByShape(shape)}>
                <span>{formatText(shape)}</span>
                <strong>
                  ({mounts.filter(frame => frame.shape === shape).length})
                </strong>
              </div>
            ))}
            <div onClick={deleteFilter}>
              <span>Todos</span>
              <strong>({mounts.length})</strong>
            </div>
          </div>
        </section>
      </div>

      <div className={classnames('shop', { active: !toggleFilters })}>
        <div className='filter-actions'>
          {!toggleFilters && (
            <ButtonToggler
              state={toggleFilters}
              onClick={() => setTogglerFilters(prev => !prev)}
            />
          )}

          <form className='search-bar' noValidate onSubmit={submitSearch}>
            <Input
              type='text'
              label='Buscar'
              iconName='search'
              value={searchQuery}
              onChange={handleSearch}
              onIconClick={submitSearch}
            />
          </form>

          <div className='filter-info secondary-font'>
            {filterMode.mode !== 'none' &&
              `Filtrando por ${formatText(filterMode.choice)}`}
          </div>

          <div className='sorting-dropdown'>
            <div className='dropdown-title'>
              {sortingMode === 'recent'
                ? 'Más nuevos'
                : sortingMode === 'popular'
                ? 'Más populares'
                : sortingMode === 'lowToHigh'
                ? 'Más baratos'
                : sortingMode === 'highToLow'
                ? 'Más caros'
                : sortingMode === 'discount' && 'Los mejores descuentos'}{' '}
              <span className='material-icons'>arrow_drop_down</span>
            </div>
            <div className='dropdown-items'>
              <div
                className='dropdown-action'
                onClick={() => sorMounts('recent')}
              >
                Más nuevos
              </div>
              <div
                className='dropdown-action'
                onClick={() => sorMounts('popular')}
              >
                Más populares
              </div>
              <div
                className='dropdown-action'
                onClick={() => sorMounts('lowToHigh')}
              >
                Más baratos
              </div>
              <div
                className='dropdown-action'
                onClick={() => sorMounts('highToLow')}
              >
                Más caros
              </div>
              <div
                className='dropdown-action'
                onClick={() => sorMounts('discount')}
              >
                Los mejores descuentos
              </div>
            </div>
          </div>
        </div>
        <div className='search-results'>
          {isSearch ? (
            searchResults.length > 0 ? (
              searchResults.map((frame, index) => (
                <div className='frame-wrapper'>
                  <Frame key={index} data={frame} />
                </div>
              ))
            ) : (
              <div className='not-found'>
                <Icon name='sad-tear'></Icon>
                <h3>No se encontraron resultados</h3>
                <p>
                  Lo que estás buscando desafortunadamente no se encuentra o no
                  está disponible.
                </p>
              </div>
            )
          ) : (
            mounts.map((frame, index) => (
              <div className='frame-wrapper'>
                <Frame key={index} data={frame} />{' '}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Catalogue
