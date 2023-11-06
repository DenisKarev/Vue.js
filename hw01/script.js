// Vue.js HomeWork #01
// Часть 2. Задание по Vue

// 1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки должен перевернуться и отобразиться в обратном порядке.
// 2. Есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка”
//     нажав на кнопку "Добавить".
// 3. *Дополнительное задание: При клике на элемент списка он должен быть удален. (по желанию)

const v = new Vue({
  el: '#p2tasks',
  data: {
    revButtonMessage: 'Перевернуть!',
    addElemToListButtonMessage: 'Добавить элемент в список',
    elemList: [
      {
        id: 1,
        text: 'Перывй элемент списка',
      },
      {
        id: 2,
        text: 'Второй элемент списка',
      },
    ],
    elemListLastId: 2
  },
  methods: {
    // task 01
    buttonReverse() {
      this.revButtonMessage = this.revButtonMessage.split('').reverse().join('');
    },
    // task 02
    addElemToList() {
      this.elemList.push({id: this.elemListLastId+1, text: 'Новый элемент списка'});
      this.elemListLastId++;
    },
    // task 03
    removeElemFromList(elem) {
        const ind = this.elemList.findIndex((e) => e.id === elem)
        this.elemList.splice(ind, 1);
    },
  },
  computed: {},
});
