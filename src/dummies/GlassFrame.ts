import { GlassFrameType } from '../typings/custom'

export interface GetPropsType {
  query: {
    key: string
    value: string
  }
}

export default class GlassFrame {
  static data: Array<GlassFrameType> = [
    {
      _id: '1000',
      brand: 'whitwx',
      material: 'acetato',
      image: [
        require('../assets/img/dummies/blue_1_model_1.png').default,
        require('../assets/img/dummies/blue_1_test_1.png').default
      ],
      color: 'azul',
      shape: 'semi_agatada',
      price: 100000,
      discount: 5,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus sapien, ullamcorper nec nibh et, scelerisque faucibus erat. Proin maximus arcu felis, mollis dictum nisi egestas at',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      _id: '1001',
      brand: 'Whitex',
      material: 'aluminio',
      image: [
        require('../assets/img/dummies/white_1_model_1.png').default,
        require('../assets/img/dummies/white_1_test_1.png').default
      ],
      color: 'blanco',
      shape: 'agatada',
      price: 150000,
      discount: 10,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus sapien, ullamcorper nec nibh et, scelerisque faucibus erat. Proin maximus arcu felis, mollis dictum nisi egestas at. Curabitur viverra consequat erat id egestas. Aenean ut purus porta, gravida mi quis, euismod sapien. Mauris suscipit magna vel convallis vehicula. Nunc hendrerit ipsum vel nisl vestibulum pretium. Etiam sed sem enim. Nam mattis interdum nulla, sit amet consequat turpis interdum nec. In eu justo id dui accumsan varius. Vestibulum odio eros, vulputate at dictum ac, sodales vel odio. Sed consequat nisi in dui pulvinar accumsan eu sed lorem. Praesent elementum risus eu cursus aliquet. Etiam congue diam dolor, at pulvinar massa blandit a. Aliquam molestie faucibus posuere.',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      _id: '1002',
      brand: 'Whitex',
      material: 'metal',
      image: [
        require('../assets/img/dummies/white_2_model_1.png').default,
        require('../assets/img/dummies/white_2_test_1.png').default
      ],
      color: 'blanco',
      shape: 'semi_agatada',
      price: 110000,
      discount: 0,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus sapien, ullamcorper nec nibh et, scelerisque faucibus erat. Proin maximus arcu felis, mollis dictum nisi egestas at',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      _id: '1003',
      brand: 'Orangex',
      material: 'tr90',
      image: [
        require('../assets/img/dummies/orange_1_model_1.png').default,
        require('../assets/img/dummies/orange_1_test_1.png').default
      ],
      color: 'naranja',
      shape: 'semi_agatada',
      price: 90000,
      discount: 0,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus sapien, ullamcorper nec nibh et, scelerisque faucibus erat. Proin maximus arcu felis, mollis dictum nisi egestas at',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      _id: '1005',
      brand: 'Blxck',
      material: 'acetato',
      image: [
        require('../assets/img/dummies/black_1_model_1.png').default,
        require('../assets/img/dummies/black_1_test_1.png').default
      ],
      color: 'negro',
      shape: 'rectangular',
      price: 180000,
      discount: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus sapien, ullamcorper nec nibh et, scelerisque faucibus erat. Proin maximus arcu felis, mollis dictum nisi egestas at',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      _id: '1006',
      brand: 'Blxck',
      material: 'aluminio',
      image: [
        require('../assets/img/dummies/black_2_model_1.png').default,
        require('../assets/img/dummies/black_2_test_1.png').default
      ],
      color: 'negro',
      shape: 'semi_redondas',
      price: 100000,
      discount: 5,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus sapien, ullamcorper nec nibh et, scelerisque faucibus erat. Proin maximus arcu felis, mollis dictum nisi egestas at',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      _id: '1007',
      brand: 'Blxck',
      material: 'metal',
      image: [
        require('../assets/img/dummies/black_3_model_1.png').default,
        require('../assets/img/dummies/black_3_test_1.png').default
      ],
      color: 'negro',
      shape: 'vintage',
      price: 100000,
      discount: 5,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus sapien, ullamcorper nec nibh et, scelerisque faucibus erat. Proin maximus arcu felis, mollis dictum nisi egestas at',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      _id: '1008',
      brand: 'Blxck',
      material: 'plastico',
      image: [
        require('../assets/img/dummies/black_4_model_1.png').default,
        require('../assets/img/dummies/black_4_test_1.png').default
      ],
      color: 'negro',
      shape: 'semi_redondas',
      price: 100000,
      discount: 5,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus sapien, ullamcorper nec nibh et, scelerisque faucibus erat. Proin maximus arcu felis, mollis dictum nisi egestas at',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      _id: '1009',
      brand: 'Gxld',
      material: 'metal',
      image: [
        require('../assets/img/dummies/gold_1_model_1.png').default,
        require('../assets/img/dummies/gold_1_test_1.png').default
      ],
      color: 'amarillo',
      shape: 'semi_agatada',
      price: 100000,
      discount: 5,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus sapien, ullamcorper nec nibh et, scelerisque faucibus erat. Proin maximus arcu felis, mollis dictum nisi egestas at',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      _id: '1010',
      brand: 'Redx',
      material: 'plastico',
      image: [
        require('../assets/img/dummies/red_1_model_1.png').default,
        require('../assets/img/dummies/red_1_test_1.png').default
      ],
      color: 'rojo',
      shape: 'semi_agatada',
      price: 100000,
      discount: 5,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus sapien, ullamcorper nec nibh et, scelerisque faucibus erat. Proin maximus arcu felis, mollis dictum nisi egestas at',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      _id: '1011',
      brand: 'Purplx',
      material: 'tr90',
      image: [
        require('../assets/img/dummies/purple_1_model_1.png').default,
        require('../assets/img/dummies/purple_1_test_1.png').default
      ],
      color: 'violeta',
      shape: 'semi_agatada',
      price: 100000,
      discount: 5,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus sapien, ullamcorper nec nibh et, scelerisque faucibus erat. Proin maximus arcu felis, mollis dictum nisi egestas at',
      updatedAt: new Date(),
      createdAt: new Date()
    }
  ]

  static get (props?: GetPropsType): GlassFrameType | undefined {
    const { query } = props || {}

    if (query) {
      const { key, value } = query

      return this.data.find(e => e[key as keyof GlassFrameType] === value)
    }
  }

  static getAll (): Array<GlassFrameType> {
    return this.data
  }
}
