/**
 * @copyright (c) Naing Aung Lwin
 * @link https://github.com/naingaunglwin-dev/sorter
 * @package sorter/sorter (Unminified Version)
 * @license MIT License
 */

/**
 * sorter - Utility for sorting data and select options based on specified conditions.
 * @returns {Object} An object containing sorting methods for numbers, alphabets, and select elements.
 */
function sorter()
{
    const allowedCondition = {
        n_asc         : 'num-asc',
        n_desc        : 'num-desc',
        a_asc         : 'alpha-asc',
        a_desc        : 'alpha-desc',
        n_asc_a_asc   : 'num-asc-alpha-asc',
        n_asc_a_desc  : 'num-asc-alpha-desc',
        n_desc_a_asc  : 'num-desc-alpha-asc',
        n_desc_a_desc : 'num-desc-alpha-desc',
        a_asc_n_asc   : 'alpha-asc-num-asc',
        a_asc_n_desc  : 'alpha-asc-num-desc',
        a_desc_n_asc  : 'alpha-desc-num-asc',
        a_desc_n_desc : 'alpha-desc-num-desc',
    };

    const numberConditions = {
        n_asc  : allowedCondition.n_asc,
        n_desc : allowedCondition.n_desc
    };

    const alphabetConditions = {
        a_asc  : allowedCondition.a_asc,
        a_desc : allowedCondition.a_desc,
    };

    return {
        /**
         * number - Sorts an array of numbers based on the specified condition.
         * @param {number[]} data - The array of numbers to be sorted.
         * @param {string} condition - The sorting condition (e.g., 'num-asc').
         * @returns {number[]} The sorted array of numbers.
         */
        number : (data, condition) => {

            if (typeof data !== 'object' || data === []) {
                throw new Error('Data must be array type and not be empty');
            }

            if (!Object.values(numberConditions).includes(condition)) {
                throw new Error('Unsupported Condition Type');
            }

            if (data.every(item => typeof item === 'number' && Number.isNaN(item))) {
                throw new Error('Data array must contain only numbers');
            }

            if (condition === numberConditions.n_asc) {
                return data.sort((a, b) => a - b);
            } else if (condition === numberConditions.n_desc) {
                return data.sort((a, b) => b - a);
            }

            return data.sort((a, b) => a - b);
        },

        /**
         * alphabet - Sorts an array of strings (alphabets) based on the specified condition.
         * @param {string[]} data - The array of strings (alphabets) to be sorted.
         * @param {string} condition - The sorting condition (e.g., 'alpha-asc').
         * @returns {string[]} The sorted array of strings (alphabets).
         */
        alphabet : (data, condition) => {

            if (typeof data !== 'object' || data === []) {
                throw new Error('Data must be array type and not be empty');
            }

            if (!Object.values(alphabetConditions).includes(condition)) {
                throw new Error('Unsupported Condition Type');
            }

            if (data.every(item => typeof item !== 'string')) {
                throw new Error('Data array must contain only string');
            }

            if (condition === alphabetConditions.a_asc) {
                return data.sort();
            } else if (condition === alphabetConditions.a_desc) {
                return data.sort((a, b) => {
                    let x = a.toUpperCase(), y = b.toUpperCase();

                    if (x > y)
                        return -1;
                    if (x < y)
                        return 1;
                    return 0;
                });
            }

            return data.sort();
        },

        /**
         * select - Sorts options within a <select> element based on the specified condition.
         * @param {string} selector - The CSS selector or reference to the <select> element.
         * @param {string} condition - The sorting condition for options (e.g., 'num-asc-a-asc').
         * @returns {void} Updates the <select> element with sorted options.
         */
        select : (selector, condition) => {
            let element = document.querySelector(selector);

            if (element.tagName.toLowerCase() !== 'select') {
                throw new DOMException(`Only Select Tag Allowed, Using ${self.element.tagName.toLowerCase()}`);
            }

            if (!Object.values(allowedCondition).includes(condition)) {
                throw new DOMException('Unsupported Condition Type');
            }

            const options = Array.from(element.options);

            const numberOptions = [];
            const alphaOptions  = [];
            const sortedOptions = [];

            options.map(option => {
                const isNumberValue = Number(option.value);

                if (!isNaN(isNumberValue)) {
                    numberOptions.push({
                        text  : option.text,
                        value : option.value
                    });
                } else {
                    alphaOptions.push({
                        text  : option.text,
                        value : option.value
                    });
                }
            });

            if (condition === allowedCondition.n_asc) {
                numberOptions.sort((a, b) => Number(a.value) - Number(b.value));

                sortedOptions.push(...numberOptions, ...alphaOptions);

            } else if (condition === allowedCondition.n_desc) {
                numberOptions.sort((a, b) => Number(b.value) - Number(a.value));

                sortedOptions.push(...numberOptions, ...alphaOptions);

            } else if (condition === allowedCondition.a_asc) {
                alphaOptions.sort((a, b) => a.text.localeCompare(b.text));

                sortedOptions.push(...alphaOptions, ...numberOptions);

            } else if (condition === allowedCondition.a_desc) {
                alphaOptions.sort((a, b) => b.text.localeCompare(a.text));

                sortedOptions.push(...alphaOptions, ...numberOptions);

            } else if (condition === allowedCondition.n_asc_a_asc) {
                numberOptions.sort((a, b) => Number(a.value) - Number(b.value));
                alphaOptions.sort((a, b) => a.text.localeCompare(b.text));

                sortedOptions.push(...numberOptions, ...alphaOptions);

            } else if (condition === allowedCondition.n_asc_a_desc) {
                numberOptions.sort((a, b) => Number(a.value) - Number(b.value));
                alphaOptions.sort((a, b) => b.text.localeCompare(a.text));

                sortedOptions.push(...numberOptions, ...alphaOptions);

            } else if (condition === allowedCondition.n_desc_a_asc) {
                numberOptions.sort((a, b) => Number(b.value) - Number(a.value));
                alphaOptions.sort((a, b) => a.text.localeCompare(b.text));

                sortedOptions.push(...numberOptions, ...alphaOptions);

            } else if (condition === allowedCondition.n_desc_a_desc) {
                numberOptions.sort((a, b) => Number(b.value) - Number(a.value));
                alphaOptions.sort((a, b) => b.text.localeCompare(a.text));

                sortedOptions.push(...numberOptions, ...alphaOptions);

            } else if (condition === allowedCondition.a_asc_n_asc) {
                alphaOptions.sort((a, b) => a.text.localeCompare(b.text));
                numberOptions.sort((a, b) => Number(a.value) - Number(b.value));

                sortedOptions.push(...alphaOptions, ...numberOptions);

            } else if (condition === allowedCondition.a_asc_n_desc) {
                alphaOptions.sort((a, b) => a.text.localeCompare(b.text));
                numberOptions.sort((a, b) => Number(b.value) - Number(a.value));

                sortedOptions.push(...alphaOptions, ...numberOptions);

            } else if (condition === allowedCondition.a_desc_n_asc) {
                alphaOptions.sort((a, b) => b.text.localeCompare(a.text));
                numberOptions.sort((a, b) => Number(a.value) - Number(b.value));

                sortedOptions.push(...alphaOptions, ...numberOptions);

            } else if (condition === allowedCondition.a_desc_n_desc) {
                alphaOptions.sort((a, b) => b.text.localeCompare(a.text));
                numberOptions.sort((a, b) => Number(b.value) - Number(a.value));

                sortedOptions.push(...alphaOptions, ...numberOptions);

            }

            element.innerHTML = sortedOptions.map(option => `<option value="${option.value}">${option.text}</option>`).join('');
        },
    };
}
