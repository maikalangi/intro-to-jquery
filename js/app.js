$("#addHome").removeClass("btn-danger").addClass("btn-success");

const isStyled = $("p").hasClass("left-aligned big")
// the isStyled var will be true if any <p> elements have
// the classes of "left-aligned" and "big"
console.log(isStyled);

// returns a jQuery set of new DOM elements
const $newLink = $(
    '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>'
  )

const $p = $('<p class="bold">');

$("body").append($newLink);

$("#zillowLink").attr("target", "_blank")

console.log($('#zillowLink').attr('href'));

// $("#addHome").on("click", function (evt) {
//     console.log(evt)
//   })

$("#addHome").click(function (evt) {
    console.log(this)
})

$("body").on("click", "div.circle", function () {
    // 'this' will be a <div> with a class of 'circle'
  })

$("#homes tbody").on("click", "button", function () {
    console.log(this)
})

// $("#homes tbody").on("click", "button", function () {
//     $(this).closest("tr").remove()
// })

$("#homes tbody").on("click", "button", function () {
    $(this)
      .closest("tr")
      .fadeOut(1000, function () {
        // now that the tr is hidden, let's completely remove it from the DOM
        $(this).remove()
      })
})