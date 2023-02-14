document.getElementById('kitkat-buy-btn').addEventListener('click', function () {

    const quantity = getInputQuantityById('kitkat-quantity');
    console.log(quantity);

    const quantityPrice = getTextElementById('kitkat-price');
    console.log(quantityPrice);

    if(isNaN(quantity)){
      alert('plesce provide a valid number');
      return;
    }

    const quantityPriceCost = getCostTextElementById('chocolate')
    console.log(quantityPriceCost);

    
    const quantityPlusPriceCost = quantity * quantityPrice;
    console.log(quantityPlusPriceCost);

    setInnerText('chocolate', quantityPlusPriceCost)

    total();

})
document.getElementById('rose-buy-btn').addEventListener('click', function () {

    const quantity = getInputQuantityById('rose-quantity');
    console.log(quantity);

    const quantityPrice = getTextElementById('rose-price');
    console.log(quantityPrice);

    if(isNaN(quantity)){
      alert('plesce provide a valid number');
      return;
    }

    const quantityPriceCost = getCostTextElementById('rose')
    console.log(quantityPriceCost);

    
    const quantityPlusPriceCost = quantity * quantityPrice;
    console.log(quantityPlusPriceCost);

    setInnerText('rose', quantityPlusPriceCost)

    total();
})

document.getElementById('diary-buy-btn').addEventListener('click', function () {

    const quantity = getInputQuantityById('diary-quantity');
    console.log(quantity);

    const quantityPrice = getTextElementById('diary-price');
    console.log(quantityPrice);

    if(isNaN(quantity)){
      alert('plesce provide a valid number');
      return;
    }

    const quantityPriceCost = getCostTextElementById('diary')
    console.log(quantityPriceCost);

    
    const quantityPlusPriceCost = quantity * quantityPrice;
    console.log(quantityPlusPriceCost);

    setInnerText('diary', quantityPlusPriceCost)

    total();
})


function getInputQuantityById(id){
    const quantity = document.getElementById(id);
    const quanttyValueStr = quantity.value;
    quantity.value = '';
    const quantityValue = parseFloat(quanttyValueStr);
    return quantityValue;
}

function getTextElementById (id){
    const quantityPrice = document.getElementById(id)
    const quantityPriceStr = quantityPrice.innerText;
    const quantityPriceCost = parseFloat(quantityPriceStr);
    return quantityPriceCost;
}

function getCostTextElementById (id){
    const quantityPriceCost = document.getElementById(id)
    const quantityPriceStr = quantityPriceCost.innerText;
    const quantityPriceAmount = parseFloat(quantityPriceStr);
    return quantityPriceAmount;
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
  }

  function stringToNumberConverter(id) {
    const element = document.getElementById(id).innerText;
    return parseFloat(element);
  }

  function total(params) {
    const chocolate = stringToNumberConverter("chocolate");
    const rose = stringToNumberConverter("rose");
    const diary = stringToNumberConverter("diary");
    const total = chocolate + rose + diary;
    setInnerText("total", total);
    return total;
  }

  function handlePromoCode(params) {
    const promoCode = document.getElementById("promo-code").value;

    if(promoCode == "101") {
      const total = stringToNumberConverter("total");
      setInnerText("all-total", total - total * 0.1);
      } else {
        alert("promo code is not correct");
      }
  }
  

