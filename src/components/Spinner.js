// Spinner.js
function Spinner() {
    return (
      <box-icon 
        name='loader-alt' 
        animation='spin' 
        flip='horizontal' 
        color='#000000' 
        style={{
          display: 'inline-block', // Уверете се, че е видим
          width: '30px',          // Задайте ширина
          height: '30px',         // Задайте височина
          marginLeft: '10px'      // Добавете отстояние от текста
        }} 
      />
    );
  }
  
  export default Spinner;
  