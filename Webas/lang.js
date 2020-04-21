var str="Create Stunning";
var lang;
var arrLang = {
    'en' : {
        'contactusat' : 'Contact us at',
        'type' : 'Type',
        'address' : 'Address',
        'working' : 'Working hours',
        'email' : 'Email',
        'phone' : 'Phone',
        'street' : 'Street',
        'contacts' : 'CONTACTS',
        'aboutus' : 'ABOUT US',
        'lang' : 'LANGUAGE',
        'reliable' : 'MOST REALIABLE',
        'quarantine' : 'QUARANTINE',
        'supply' : 'SUPPLY SHOP',
        'taiwan' : 'IN TAIWAN',
        'spagetis' : 'spagetthi',
        'popular' : 'MOST POPULAR PRODUCTS',
        'view' : 'Quick View',
        'toilet' : 'TOILET PAPER',
        'bean' : 'BEAN CANS',
        'hand' : 'Hand sanitizer',
        'signin' : 'SIGN IN',
        'signup' : 'SIGN UP',
        'en' : 'english',
        'lt' : 'lithuanian',
        'username' : 'Username',
        'password' : 'Password',
        'login' : 'login',
        'confpassword' : 'confirmed password',
        'register' : 'register',
        'home' : 'HOME',
        'products' : 'PRODUCTS',
        'spageciai' : 'SpaGHETTO',
        'cart' : 'Add to cart',
        'cart2' : 'CART',
        'item' : 'ITEM',
        'price' : 'ONE QNT PRICE',
        'qnt' : 'QUANTITY',
        'total' : 'Total',
        'purchase' : 'PURCHASE',
        'spageciai2' : 'SPAGETTHI',
    },
    'lt' : {
        'contactusat' : 'Susisiekite su mumis',
        'type' : 'Tipas',
        'address' : 'Adresas',
        'working' : 'Darbo valandos',
        'email' : 'El. paštas',
        'phone' : 'Telefono nr.',
        'street' : 'Gatvė',
        'contacts' : 'KONTAKTAI',
        'aboutus' : 'APIE MUS',
        'lang' : 'KALBA',
        'reliable' : 'PATIKIMIAUSIA',
        'quarantine' : 'KARANTINO',
        'supply' : 'PREKIŲ PARDUOTUVĖ',
        'taiwan' : 'TAIVANE',
        'spagetis' : 'spagečiai',
        'popular' : 'POPULIARIAUSIOS PREKĖS',
        'view' : 'Peržiūrėti',
        'toilet' : 'TUALETINIS',
        'beans' : 'PUPELĖS',
        'hand' : 'DEZINFEKCINIS SKYSTIS',
        'signin' : 'PRISIJUNGTI',
        'signup' : 'REGISTRUOTIS',
        'en' : 'angliškai',
        'lt' : 'lietuviškai',
        'username' : 'vardas',
        'password' : 'slaptažodis',
        'login' : 'prisijungti',
        'confpassword' : 'patvirtinti slaptažodį',
        'register' : 'registruotis',
        'home' : 'NAMAI',
        'products' : 'PRODUKTAI',
        'spageciai' : 'SPAGEČIAI',
        'cart' : 'Į krepšelį',
        'cart2' : 'KREPŠELIS',
        'item' : 'PREKĖ',
        'price' : 'Vieno vnt. kaina',
        'qnt' : 'KIEKIS',
        'total' : 'Iš viso',
        'purchase' : 'PIRKTI',
        'spageciai2' : 'SPAGEČIAI',
    }
};
$(function(){
    $('.dropdown-item').click(function(){
        localStorage.setItem(lang, $(this).attr('id'))
        window.location.reload()
    });

    $('.carousel-inner div').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.section1 h1').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.product-view h2').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.dropdown button').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.dropdown a').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.container h6 a').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.product-view button').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.article h1').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.article th').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.cart h2').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.cart-total strong').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.cart button').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });





    $('.col-4 a').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.modal-body h4').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });


    $('.sign-in').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.btn.btn-secondary dropdown-toggle').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.sign-up').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.content1 span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.content span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.container span').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    

    $('.text-white').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.nav-link').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });




});