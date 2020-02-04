$('button').on('click', function () {
	$('p').css('opacity', 0);
});

const getInvoiceByToken = async () => {
	const response = await fetch('http://localhost:8080/http://stage.nwdwebservices.firstam.net/CreditCardPaymentsAPI/api/v1/ReceiptsByPaymentToken/' + $("#Token").val());
	const myJson = await response.json();
	$("#responseArea").val(JSON.stringify(myJson, null, 2));
}

function payInvoice() {
	var win = window.open("http://stage.fapay.firstam.net/?PaymentToken=" + $("#Token").val(), '_blank');
	win.focus();
}

const createToken = async () => {
	var myBody ='{"Payments" : [{"MerchantId" : "'+ $("#MerchantId").val() +'","OrderNumber" : "'+ $("#OrderNumber").val() +'","ItemList" : "'+ $("#ItemList").val() +'","Amount" : '+ $("#Amount").val() +'}],"SourceAppId" : 999,"SourceUserId" : "0","ReturnUrl" : "Http://google.com","ReturnData" : "TestFromPostman","HeadingText" : "ClarityFirst Test Payment","SubHeadings" : {"SH1": "Subheading 1", "SH2": "Subheading 2"},"ClientProcessingMessage" : "Please Wait While We Process your Payment...","ReturnValues" : {"ErrorURL" : "https://stage.fabill.firstam.com/Home/Error","NextItemKey" : "NextItemValue"}}';
	$("#responseArea").val(JSON.stringify(JSON.parse(myBody), null, 2));
	const response = await fetch('http://localhost:8080/http://stage.nwdwebservices.firstam.net/CreditCardPaymentsAPI/api/v1/PaymentToken', {
		method: 'POST',
		body: myBody, // string or object
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const myJson = await response.json(); //extract JSON from the http response
	$("#Token").val(myJson["Token"]);
}