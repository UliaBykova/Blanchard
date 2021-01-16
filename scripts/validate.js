let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength : 2,
      maxLength : 30, 
      function: (name, value) => {
        if ((value.search(/\d/) != -1)) {
			return false;
		} else {
			return true;
		}
      }
    },
    tel: {
      required: true,
      function: (tel, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Как вас зовут?',
    tel : ' Укажите ваш телефон',
  },
  colorWrong: '#DC143C'
})

