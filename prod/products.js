
$(document).ready(function () {
    renderProducts(products);

    $('#search-box').keyup(function () { 
        searchProducts();
    });
});

function renderProducts(items) {
    $("#products-div").html('');
    $.each(items, function(i, product) {
        var prodHtml = generateView(product);
        $("#products-div").append(prodHtml);
    });
}

function searchProducts() {
    var term = $('#search-box').val().toLowerCase().trim();
    
    var searched = [];
    if(term && term.length >= 3) {
        $.each(products, function(i, product) {
            if(product.name.search(term) != -1
            || product.desc.search(term) != -1
            || product.search_term.search(term) != -1) {
                searched.push(product);
            }
        });

        if(searched.length > 0) {
            renderProducts(searched);
        }
    } else if(!term) {
        renderProducts(products);
    }
}

function generateView(product) {
    var stock = product.stock;



    var html = "";
    html += '<div class="u-align-center u-container-style u-products-item u-repeater-item">';
    html += '<div class="u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-1">';
    html += '<img alt="" class="u-expanded-width-xs u-image u-image-contain u-image-default u-product-control u-image-1" src="./prod/images/' + product.image + '">';
    html += '<div class="u-container-style u-grey-10 u-group u-group-1">';
    html += '<div class="u-container-layout u-container-layout-2">';
    html += '<h4 class="u-align-left u-product-control u-text u-text-3">';
    html += '<a title="' + product.name + '" class="u-product-title-link">' + product.name + '</a>';
    html += '</h4>';
    html += '<div class="u-align-left u-product-control u-product-desc u-text u-text-4">' + product.company + '</div>';
    //html += '<div class="u-align-left u-product-control u-product-price u-product-price-1">';
    //html += '<div class="u-price-wrapper u-spacing-10">';

    if(stock && stock == 'yes') {
        html += '<div class="u-align-left u-product-control u-product-desc u-text u-text-4" style="color: green;">Stock available</div>';
    } else if(stock && stock == 'no') {
        html += '<div class="u-align-left u-product-control u-product-desc u-text u-text-4" style="color: red;">Out of stock</div>';
    }

    html += '<div class="u-align-left u-product-control u-product-desc u-text u-text-4">Price: ' + product.cash_price + ' / ' + product.unit + '</div>';
    //html += '</div>';
   //html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
}

var products = [
    {
        "code": "M00001",
        "name": "2-4-D 1L MAIN",
        "company": "ADAMA INDIA LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "34",
        "credit_price": "",
        "unit": "Unit",
        "image": "2-4-d-adama.jpeg",
        "search_term": "2-4-d 1l main adama india ltdherbicide"
    },
    {
        "code": "M00002",
        "name": "2-4-D  1LTR",
        "company": "KRISHI RASAYAN P.LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "krishi-rasayan.png",
        "search_term": "2-4-d  1ltrkrishi rasayan p.ltdherbicide"
    },
    {
        "code": "M00003",
        "name": "2-4-D 1L ZUARA",
        "company": "ATUL LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "2-4-d-atul.jpeg",
        "search_term": "2-4-d 1l zuaraatul ltdherbicide"
    },
    {
        "code": "M00004",
        "name": "2-4-D  1 L ZURA ",
        "company": "ATUL LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "2-4-d-atul.jpeg",
        "search_term": "2-4-d  1 l zura atul ltdherbicide"
    },
    {
        "code": "M00005",
        "name": "2-4-D 250ML MAIN ",
        "company": "ADAMA  INDIA LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "2-4-d-adama.jpeg",
        "search_term": "2-4-d 250ml main adama  india ltdherbicide"
    },
    {
        "code": "M00006",
        "name": "2.4.D 250 ML ZURA  ",
        "company": "ATUL LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "2-4-d-atul.jpeg",
        "search_term": "2.4.d 250 ml zura  atul ltdherbicide"
    },
    {
        "code": "M00007",
        "name": "2-4-D 400ML MAIN ",
        "company": "ADAMA  INDIA LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "2-4-d-adama.jpeg",
        "search_term": "2-4-d 400ml main adama  india ltdherbicide"
    },
    {
        "code": "M00008",
        "name": "2.4D 500 GRAM POWDER SALIX",
        "company": "ATUL LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "2-4-d-atul.jpeg",
        "search_term": "2.4d 500 gram powder salixatul ltdherbicide"
    },
    {
        "code": "M00009",
        "name": "2-4-D 500ML ",
        "company": "GODREJ AGROTECH LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "godrej-products.png",
        "search_term": "2-4-d 500ml godrej agrotech ltdherbicide"
    },
    {
        "code": "M00010",
        "name": "ADRINO 100 GM ",
        "company": "SYNGENTA LTD",
        "category": "HERBICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "syngenta-products.png",
        "search_term": "adrino 100 gm syngenta ltdherbicide"
    },
    {
        "code": "M00011",
        "name": "AGADI 1KG",
        "company": "ADAMA  INDIA LTD",
        "category": "PESTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-products.png",
        "search_term": "agadi 1kgadama  india ltdpesticide"
    },
    {
        "code": "M00012",
        "name": "AGADI 5KG",
        "company": "ADAMA  INDIA LTD",
        "category": "PESTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-products.png",
        "search_term": "agadi 5kgadama  india ltdpesticide"
    },
    {
        "code": "M00013",
        "name": "ALIKA 100ML ",
        "company": "SYNGENTA LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "syngenta-products.png",
        "search_term": "alika 100ml syngenta ltdinsecticide"
    },
    {
        "code": "M00014",
        "name": "ALIKA 40 ML",
        "company": "SYNGENTA LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "syngenta-products.png",
        "search_term": "alika 40 mlsyngenta ltdinsecticide"
    },
    {
        "code": "M00015",
        "name": "AMNON 100GM",
        "company": "ADAMA  INDIA LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-products.png",
        "search_term": "amnon 100gmadama  india ltdinsecticide"
    },
    {
        "code": "M00016",
        "name": "AMNON 50 GM.",
        "company": "ADAMA  INDIA LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-products.png",
        "search_term": "amnon 50 gm.adama  india ltdinsecticide"
    },
    {
        "code": "M00017",
        "name": "ANTH-50 250 ML [CHLOROPYRIPHOS 50%EC]",
        "company": "KRISHI RASAYAN P.LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "krishi-rasayan.png",
        "search_term": "anth-50 250 ml [chloropyriphos 50%ec]krishi rasayan p.ltdinsecticide"
    },
    {
        "code": "M00018",
        "name": "ANTH-50 500ML[CHLOROPYRIPHOS 50% EC]",
        "company": "KRISHI RASAYAN P.LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "krishi-rasayan.png",
        "search_term": "anth-50 500ml[chloropyriphos 50% ec]krishi rasayan p.ltdinsecticide"
    },
    {
        "code": "M00019",
        "name": "Anth-505 100 Ml (Chloropyriphos 50% Ec)",
        "company": "KRISHI RASAYAN P.LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "krishi-rasayan.png",
        "search_term": "anth-505 100 ml (chloropyriphos 50% ec)krishi rasayan p.ltdinsecticide"
    },
    {
        "code": "M00020",
        "name": "ANTH 505 1LTR (CHORO50% + CYPER 5%)",
        "company": "KRISHI RASAYAN P.LTD",
        "category": "INSECTICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "krishi-rasayan.png",
        "search_term": "anth 505 1ltr (choro50% + cyper 5%)krishi rasayan p.ltdinsecticide"
    },
    {
        "code": "M00021",
        "name": "ANTRACOL 100GM",
        "company": "BAYER LTD",
        "category": "FUNGICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "bayer-products.png",
        "search_term": "antracol 100gmbayer ltdfungicide"
    },
    {
        "code": "M00022",
        "name": "BENMAIN 100GM",
        "company": "ADAMA  INDIA LTD",
        "category": "FUNGICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-products.png",
        "search_term": "benmain 100gmadama  india ltdfungicide"
    },
    {
        "code": "M00023",
        "name": "BENMAIN 250GM",
        "company": "ADAMA  INDIA LTD",
        "category": "FUNGICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-products.png",
        "search_term": "benmain 250gmadama  india ltdfungicide"
    },
    {
        "code": "M00024",
        "name": "BENMAIN 500 GRM",
        "company": "ADAMA  INDIA LTD",
        "category": "FUNGICIDE",
        "desc": "",
        "stock": "yes",
        "cash_price": "",
        "credit_price": "",
        "unit": "Unit",
        "image": "adama-products.png",
        "search_term": "benmain 500 grmadama  india ltdfungicide"
    }
];