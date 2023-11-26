<div align="center">

# Sorter
## (Simple Js Library)

</div>

## Description
- Sorter is a straightforward JavaScript library designed for sorting alphabetically, numerically, or sorting HTML select option elements.
- It draws inspiration from various JavaScript resources and aims to simplify the sorting process within web development.

## Contributing
- **Sorter** is an open-source project, and contributions are welcome.
- If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request on the project repository.

## Requirement
- **Recommend to use all latest version of browsers**
- Chrome (v - 97 or later)
- Safari (v - 13 or later)
- Opera (v - 81 or later)
- Microsoft Edge (v - 97 or later)
- Firefox (v - 96 or later)

## Installation & Setup
1. Download the zip file from `https://github.com/naingaunglwin-dev/sorter`
2. Extract the contents of the zip file and copy the sorter.js file to your project directory
3. Add the following line to your HTML file to include the `sorter.js`
- script: `<script src="sorter.js"></script>`

## Usage
```javascript
    <select>
        <option value="one">Mg Mg</option>
        <option value="two">Kyaw Kyaw</option>
        <option value="three">Tun Tun</option>
        <option value="four">Aung Aung</option>
        <option value="1">David</option>
        <option value="six">John</option>
        <option value="2">Ko Ko</option>
        <option value="eight">Smith</option>
        <option value="nine">Nyi Nyi</option>
        <option value="ten">Min Min</option>
    </select>

    <script src="sorter.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    sorter().select('select', 'num-desc-alpha-asc');
  });
</script>

Output :
    <select>
        <option value="2">Ko Ko</option>
        <option value="1">David</option>
        <option value="four">Aung Aung</option>
        <option value="six">John</option>
        <option value="two">Kyaw Kyaw</option>
        <option value="one">Mg Mg</option>
        <option value="ten">Min Min</option>
        <option value="nine">Nyi Nyi</option>
        <option value="eight">Smith</option>
        <option value="three">Tun Tun</option>
    </select>
```

## Allowed Conditions List
#### num stands for number
#### a stands for alphabet
#### asc stands for ascending
#### desc stands for descending
- num-asc
- num-desc
- a-asc
- a-desc
- num-asc-a-asc
- num-asc-a-desc
- num-desc-a-asc
- num-desc-a-desc
- a-asc-num-asc
- a-asc-num-desc
- a-desc-num-asc
- a-desc-num-desc
