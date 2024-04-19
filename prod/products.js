
$(document).ready(function () {
    $.ajax({
        url: "./products.json",
        dataType: "text",
        success: function (dataTest) {
            var json = $.parseJSON(dataTest);
            $.each(json, function (i, jsonObjectList) {
                for (var index = 0; index < jsonObjectList.listValue_.length; index++) {
                    console.log(jsonObjectList.listKey_[index][0] + " -- " + jsonObjectList.listValue_[index].description_);
                }
            });


        }
    });
});

function renderProducts(products) {
    return number * number;
}