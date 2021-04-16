<?php
// регистрационная информация (Идентификатор магазина, пароль #1)
// registration info (Merchant ID, password #1)
$mrh_login = "freeschoolferu";
$mrh_pass1 = "R3lgvQIC5U8C0ZeNouy9";

// номер заказа
// number of order
$inv_id = 1;

// описание заказа
// order description
$inv_desc = "Frontend Ианов И.И. 79904564545";

// сумма заказа
// sum of order
$out_summ = "32990";

// тип товара
// code of goods
$shp_item = "2";

// предлагаемая валюта платежа
// default payment e-currency
$in_curr = "0";

// язык
// language
$culture = "ru";


$IsTest = 1;
$mrh_pass2 = "P3jcUuHc3krKVk3P13eV";

// формирование подписи
// generate signature
$crc  = md5("$mrh_login:$out_summ:$inv_id:$mrh_pass1:Shp_item=$shp_item");

// форма оплаты товара
// payment form
print "<html>" .
      "<form action='https://auth.robokassa.ru/Merchant/Index.aspx' method='POST'>" .
      "<input type='text' name='MerchantLogin' value='$mrh_login'>" .
      "<input type='text' name='OutSum' value='$out_summ'>" .
      "<input type='text' name='InvId' value='$inv_id'>" .
      "<input type='text' name='Description' value='$inv_desc'>" .
      "<input type='text' name='SignatureValue' value='$crc'>" .
      "<input type='text' name='Shp_item' value='$shp_item'>" .
      "<input type='text' name='Culture' value='$culture'>" .
      "<input type='submit' value='Pay'>" .
      "</form></html>";
?>