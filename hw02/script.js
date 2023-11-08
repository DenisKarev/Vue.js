// Vue.js HomeWork #02
// Часть 2. Задание по Vue

// Вы разрабатываете приложение для отображения и сортировки списка товаров.
//  У вас есть массив объектов products, где каждый объект представляет товар
//  с его названием и ценой. Вам необходимо отобразить список товаров и предоставить
//  пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).

const v = new Vue({
  el: '#p2tasks',
  data: {
    butonsDescriptionMessage: 'Sorting style )',
    buttonHighLowMessage: 'High price first',
    buttonLowHighMessage: 'Low price first',
    buttonUnsMessage: 'Unsorted',
    notSorted: true,
    prodSort: '',
    products: [
      {
        id: 1,
        title: 'Product #01',
        price: 100,
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate labore deserunt magnam.',
        pic: 'https://fakeimg.pl/250x100/',
      },
      {
        id: 2,
        title: 'Product #02',
        price: 120,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia laudantium dolorum doloribus aut.',
        pic: 'https://fakeimg.pl/250x100/',
      },
      {
        id: 3,
        title: 'Product #03',
        price: 150,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam nemo debitis consequatur.',
        pic: 'https://fakeimg.pl/250x100/',
      },
      {
        id: 4,
        title: 'Product #04',
        price: 80,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus accusamus impedit vitae laboriosam?',
        pic: 'https://fakeimg.pl/250x100/',
      },
      {
        id: 5,
        title: 'Product #05',
        price: 180,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut neque voluptatum expedita quo?',
        pic: 'https://fakeimg.pl/250x100/',
      },
    ],
  },
  methods: {
    buttonHighLow() {
      this.notSorted = false;
      this.prodSort = 'up';
    },
    buttonLowHigh() {
      this.notSorted = false;
      this.prodSort = 'down';
    },
    buttonUns(){
      this.notSorted = true;
      this.prodSort = '';

    }
  },
  computed: {
    getProducts() {
      if (this.notSorted) return this.products.slice();
      if (this.prodSort) {
        if (this.prodSort === 'up') {
          return this.products.slice().sort((a,b) => b.price - a.price).slice();
        } else return this.products.slice().sort((a,b) => a.price - b.price);
      } else return {id: 'err',
        title: 'Global error',
        price: 'err',
        description: 'er',
        pic: 'https://fakeimg.pl/250x100/',}
    }
  }
});
