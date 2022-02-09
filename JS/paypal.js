/*
[2:13 PM] Kyle Ribordy
At Honey, one of the services we provide is automatically trying coupons for a given cart. 
Let's say we have an in-memory store of coupons that looks like this:
[  
  {"code": "SAVE10PCT",  "discountType": "PERCENT_OFF_ORDER",   "discountAmount": 10, "store": "Bar Supplies"},  
{"code": "FIVEBUXOFF", "discountType": "DOLLARS_OFF_ORDER",   "discountAmount": 5, "store": "Bar Supplies"},  
{"code": "CHEAPFOO",   "discountType": "DOLLARS_OFF_PRODUCT", "discountAmount": 10, "productId": "FOO", "storex": "Bar Supplies"}, 
{"code": "FIZZBUZZ",   "discountType": "DOLLARS_OFF_PRODUCT", "discountAmount": 10, "productId": "1234", "store": "Baz Outfitters"}
]




{ "store": "Bar Supplies", "subtotal": 100, "products": ["FOO", "BAR", "BAZ"] }

*/

(function() {

  const coupons = [ 
    {"code": "SAVE10PCT", "discountType": "PERCENT_OFF_ORDER",  "discountAmount": 10, "store": "Bar Supplies"},
  {"code": "FIVEBUXOFF", "discountType": "DOLLARS_OFF_ORDER",  "discountAmount": 5, "store": "Bar Supplies"},
  {"code": "CHEAPFOO",  "discountType": "DOLLARS_OFF_PRODUCT", "discountAmount": 10, "productId": "FOO", "storex": "Bar Supplies"},
  {"code": "FIZZBUZZ",  "discountType": "DOLLARS_OFF_PRODUCT", "discountAmount": 10, "productId": "1234", "store": "Baz Outfitters"}
  ];

  const getStoreData = (coupons, store) => {
    return coupons.filter((coupon) => {
      return coupon.store === store;
    });
  };

  /*const normalizeAmount = (coupons) => {
    coupons.forEach((coupon) => {
      if(coupon.discountType === "PERCENT_OFF_ORDER") {
        let amount = coupon.discountAmount 
      }
    })
  }*/

  const purchaseDetails = { "store": "Bar Supplies", "subtotal": 100, "products": ["FOO", "BAR", "BAZ"] };

  const getDiscountCoupon = (purchaseDetails, coupons) => {
    const storeDetails = getStoreData(coupons, purchaseDetails.store);

    // const getDiscountCoupons = {};
    // getDiscountCoupons.store = purchaseDetails.store;
    for(coupon in storeDetails) {
      if(coupon.discountType === 'DOLLARS_OFF_PRODUCT') {
        if(purchaseDetails.products.includes(storeDetails.productId)) {
          coupon.finalDiscount = discountAmount;
        }
      } else if(coupon.discountType === "PERCENT_OFF_ORDER") {
        coupon.finalDiscount = purchaseDetails.subtotal * (coupon.discountAmount / 100);
      } else {
        coupon.finalDiscount = coupon.discountAmount;
      }
    }

    let max = 0;
    let bestCoupon = {};
    storeDetails.forEach((record) => {
      if(record.finalDiscount > max) {
        bestCoupon = record;
        max = record.finalDiscount;
      }
    });
    return bestCoupon;

  }

  getDiscountCoupon(purchaseDetails, coupons);

})();