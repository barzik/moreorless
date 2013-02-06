describe("More or less", function() {


  beforeEach(function() {
	$('<div id="container"></div>').appendTo('body');
	$('<div id="test" style="length: 400px;">lorem pixum</div>').appendTo('#container');
    $('#test').more_less_button();
	
  });

  it("Creating a button", function() { 
    expect($('.more').length).toEqual(1);
  });
  
  it("Collapsed by default", function() {
    expect($('#test').css('display')).toEqual('none');
  });
  
  it("Clicking on button collapsing and expanding", function() {
	$('.more').click();
    expect($('#test').css('display')).toEqual('block');
	//jasmine.Clock.useMock()
	//jasmine.Clock.tick(1000);
	//$('.more').click();
	expect($('.btn').text()).toEqual('Read Less');
  });
  
  afterEach(function () {
    $("#container").remove();
});

 
});