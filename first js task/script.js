window.addEventListener('DOMContentLoaded', function() {

    const addCounterBtn = document.querySelector('#addbtn'),
          deleteAllCountersBtn = document.querySelector('#resetbtn');

    addCounterBtn.addEventListener('click', addingCounter);

    deleteAllCountersBtn.addEventListener('click', deleteCounters); 

    function addingCounter() {

        incrementEvenCounters();

        const counterBlock = document.createElement('div'),
              countersBlock = document.querySelector('.counters__block');

        counterBlock.classList.add('counter__block');

        counterBlock.innerHTML = `
            <input type="text" name="" id="counter-input" value="0" onkeyup="this.value = this.value.replace(${/[^\d]/g},'');">
            <div class="btns__block">
            <button id="decrement">-</button>
            <button id="increment">+</button>
            <button id="reset-counter">Reset Counter</button>
            <button id="delete-counter">Delete Counter</button>
            </div>
        `;

        countersBlock.append(counterBlock);

        // const input = document.querySelector('#counter-input');
        // console.log(input.value);

        // input.addEventListener('keydown', (event) => {
        //     if (event.keyCode === 188 || event.keyCode === 189 || event.keyCode === 190 || event.keyCode === 191) {
        //         event.preventDefault();
        //     }
        // });

        const lastCounter = countersBlock.lastElementChild;

        addIncrementListener(lastCounter);
        addDecrementListener(lastCounter);
        addResetListener(lastCounter);
        addDeleteListener(lastCounter);

        updateCountersCount();
    }

    // -----------------------------------------------

    function deleteCounters() {

        const allCounters = document.querySelectorAll('.counter__block');

        allCounters.forEach((item) => {
            item.remove();
        });

        updateCountersCount();
        updateCountersSum();
    }

    // -----------------------------------------------

    function addIncrementListener(counter) {

        const counterIncrementBtn = counter.querySelector('#increment'),
              input = counter.querySelector('#counter-input');

        counterIncrementBtn.addEventListener('click', () => {
            input.value = parseInt(input.value) + 1;
            
            updateCountersSum();
        });
    }

    function addDecrementListener(counter) {

        const counterDecrementBtn = counter.querySelector('#decrement'),
              input = counter.querySelector('#counter-input');

        counterDecrementBtn.addEventListener('click', () => {
            if (parseInt(input.value) > 0) {
                input.value = parseInt(input.value) - 1;

                updateCountersSum();
            }
        });
    }

    function addResetListener(counter) {

        const counterResetBtn = counter.querySelector('#reset-counter'),
              input = counter.querySelector('#counter-input');
              

        counterResetBtn.addEventListener('click', () => {
            input.value = 0;

            updateCountersSum();
        });
    }

    function addDeleteListener(counter) {

        const counterDeleteBtn = counter.querySelector('#delete-counter');

        counterDeleteBtn.addEventListener('click', () => {

            decrementOddCounters();

            counter.remove();
            updateCountersCount();

            updateCountersSum();
        });
    }
    // -----------------------------------------------

    function updateCountersCount() {
        const counters = document.querySelectorAll('.counter__block'),
              count = document.querySelector('#counters-count');

        count.value = counters.length;

    }

    function updateCountersSum() {
        const counters = document.querySelectorAll('.counter__block');
        let countersSum = document.querySelector('#counters-sum'),
            sum = 0;

        counters.forEach((item) => {
            sum += parseInt(item.querySelector('#counter-input').value);
        });

        countersSum.value = sum;
    }

    // -----------------------------------------------


    function incrementEvenCounters() {
        const counters = document.querySelectorAll('.counter__block');

        counters.forEach((item) =>  {
            if (parseInt(item.querySelector('#counter-input').value) % 2 === 0 && parseInt(item.querySelector('#counter-input').value) !== 0) {
                item.querySelector('#counter-input').value = parseInt(item.querySelector('#counter-input').value) + 1;
            }
        });

        updateCountersSum();
    }

    function decrementOddCounters() {
        const counters = document.querySelectorAll('.counter__block');

        counters.forEach((item) =>  {
            if (parseInt(item.querySelector('#counter-input').value) % 2 !== 0 && parseInt(item.querySelector('#counter-input').value) !== 0) {
                item.querySelector('#counter-input').value = parseInt(item.querySelector('#counter-input').value) - 1;
            }
        });

        updateCountersSum();
    }
});

