const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    maxItemCount : 3,
    placeholder: false
});