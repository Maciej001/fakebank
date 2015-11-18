Meteor.startup(() => {
  if ( Merchants.find().count() === 0 ) {
    let merchants = [
      { name: "Starbucks",
        logo: "https://i.ytimg.com/vi/ugKMyY_qYTY/maxresdefault.jpg" 
      },
      { name: "Pret a Manger",
        logo: "http://www.kamcity.com/kamlogos/logos/pret_logo.jpg"
      },
      {   
        name: "Costa Coffee", 
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/CostaLogo.svg/1024px-CostaLogo.svg.png" 
      },
      { 
        name: "Coffe Nero",
        logo: "https://secure.38degrees.org.uk/page/-/images/tax_caffe_nero434x244.jpg" 
      },
    ]

    _.each( merchants, ( merchant ) => {
      Merchants.insert( merchant );
    });

  }
});