<template>
   <div class="category-page__item" data-product-name="@@bike-name">
      <div class="series-item__container __container">
         <div class="series-item__info bike-info">
            <div class="series-item__info-header bike-info__header">
               <div
                  class="series-item__info-name bike-info__name h2"
               >{{ json.prodBikes['@@bike-name'].name }}</div>
               <div
                  class="series-item__info-price bike-info__price"
               >{{ json.prodBikes['@@bike-name'].price }}</div>
            </div>
            <div class="series-item__info-text bike-info__text">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corrupti dolorem ducimus harum consequuntur cum quidem, eum consequatur nulla, quibusdam id, consectetur quam aliquid? Explicabo molestias veritatis earum? Autem, ipsum?</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed natus veniam quis quisquam excepturi amet rerum inventore, officia ut magni, omnis ea ex labore fuga libero ipsum tempore dicta saepe.</p>
            </div>
            <div
               class="series-item__info-colors bike-info__colors"
            >@@include('../html-snippets/colors-params.html', { 'bike-name': '@@bike-name' })</div>
            <div class="series-item__button">
               <a href="../bike-page/@@bike-name.html" class="button">Подробнее</a>
            </div>
         </div>
         <div
            class="series-item__bike"
         >@@include('bike-slider-snippet.html', { 'bike-name': '@@bike-name' })</div>
      </div>
   </div>
</template>

<script>
export default {
   name: "CategoryPageItem",
};
</script>