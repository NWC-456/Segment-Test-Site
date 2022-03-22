bplist00�_WebMainResource�	
_WebResourceFrameName_WebResourceData_WebResourceMIMEType_WebResourceTextEncodingName^WebResourceURLPOc/<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1894.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">var API_URL = 'https://api.demoblaze.com';</p>
<p class="p1">var HLS_URL = '';</p>
<p class="p1">var token = '';</p>
<p class="p1">$(document).ready(function () {</p>
<p class="p1"><span class="Apple-converted-space">  </span>$.getJSON("config.json", function (data) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (data.API_URL) API_URL = data.API_URL</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (data.HLS_URL) HLS_URL = data.HLS_URL</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>bindEvents();</p>
<p class="p1"><span class="Apple-converted-space">    </span>var token = getCookie("tokenp_");</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (token.length &gt; 0) {</p>
<p class="p1"><span class="Apple-converted-space">      </span>$.ajax({</p>
<p class="p1"><span class="Apple-converted-space">        </span>type: 'POST',</p>
<p class="p1"><span class="Apple-converted-space">        </span>url: API_URL + '/check',</p>
<p class="p1"><span class="Apple-converted-space">        </span>data: JSON.stringify({ "token": token }),</p>
<p class="p1"><span class="Apple-converted-space">        </span>contentType: "application/json",</p>
<p class="p1"><span class="Apple-converted-space">        </span>success: function (data) {</p>
<p class="p1"><span class="Apple-converted-space">          </span>if (data.errorMessage == "Token has expired") {</p>
<p class="p1"><span class="Apple-converted-space">            </span>alert("Your token has expired, please login again.");</p>
<p class="p1"><span class="Apple-converted-space">          </span>} else if (data.errorMessage == "Bad parameter, token malformed.") {</p>
<p class="p1"><span class="Apple-converted-space">            </span>alert("Bad parameter, token malformed.");</p>
<p class="p1"><span class="Apple-converted-space">          </span>} else if (data.errorMessage == "Bad parameter, flag is incorrect.") {</p>
<p class="p1"><span class="Apple-converted-space">            </span>alert("Bad parameter, flag is incorrect.");</p>
<p class="p1"><span class="Apple-converted-space">          </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">            </span>document.getElementById("signin2").style.display = 'none';</p>
<p class="p1"><span class="Apple-converted-space">            </span>document.getElementById("login2").style.display = 'none';</p>
<p class="p1"><span class="Apple-converted-space">            </span>document.getElementById("nameofuser").text = "Welcome " + data.Item.username;</p>
<p class="p1"><span class="Apple-converted-space">            </span>document.getElementById('nameofuser').style.display = 'block';</p>
<p class="p1"><span class="Apple-converted-space">            </span>document.getElementById('logout2').style.display = 'block';</p>
<p class="p1"><span class="Apple-converted-space">          </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">      </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">      </span>document.getElementById("signin2").style.display = 'block';</p>
<p class="p1"><span class="Apple-converted-space">      </span>document.getElementById("login2").style.display = 'block';</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>var userc = getCookie("user");</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (userc.length &lt;= 0) {</p>
<p class="p1"><span class="Apple-converted-space">      </span>document.cookie = "user=" + guid();</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>$.ajax({</p>
<p class="p1"><span class="Apple-converted-space">      </span>type: 'GET',</p>
<p class="p1"><span class="Apple-converted-space">      </span>url: API_URL + '/entries',</p>
<p class="p1"><span class="Apple-converted-space">      </span>success: function (data) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>// alert(JSON.stringify(data));</p>
<p class="p1"><span class="Apple-converted-space">        </span>// location.href= 'prod.html?idp_=' + eid + '&amp;tokenp_=' + token;</p>
<p class="p1"><span class="Apple-converted-space">        </span>var valew = JSON.parse(JSON.stringify(data));</p>
<p class="p1"><span class="Apple-converted-space">        </span>document.frm.next2.value = valew.LastEvaluatedKey["id"];</p>
<p class="p1"><span class="Apple-converted-space">        </span>document.frm.prev2.value = valew.Items[0]["id"];</p>
<p class="p1"><span class="Apple-converted-space">        </span>data.Items.forEach(function (articleItem) {</p>
<p class="p1"><span class="Apple-converted-space">          </span>$('#tbodyid').append('&lt;div class="col-lg-4 col-md-6 mb-4"&gt;' + '&lt;div class="card h-100"&gt;' + '&lt;a href="prod.html?idp_=' + articleItem.id + '"&gt;' + '&lt;img class="card-img-top img-fluid" src="' + articleItem.img + '" alt=""&gt;' + '&lt;/a&gt;' + '&lt;div class="card-block"&gt;' + '&lt;h4 class="card-title"&gt;' + '&lt;a href="prod.html?idp_=' + articleItem.id + '" class="hrefch"&gt;' + articleItem.title + '&lt;/a&gt;' + '&lt;/h4&gt;' + '&lt;h5&gt;$' + articleItem.price + '&lt;/h5&gt;' + '&lt;p id="article" class="card-text"&gt;' + articleItem.desc + ' &lt;/p&gt;' + ' &lt;/div&gt;' + '&lt;/div&gt;' + '&lt;/div&gt;');</p>
<p class="p1"><span class="Apple-converted-space">        </span>})</p>
<p class="p1"><span class="Apple-converted-space">      </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>var player = window.player = videojs('example-video');</p>
<p class="p1"><span class="Apple-converted-space">    </span>var url = HLS_URL + "/index.m3u8";</p>
<p class="p1"><span class="Apple-converted-space">    </span>player.src({</p>
<p class="p1"><span class="Apple-converted-space">      </span>src: url,</p>
<p class="p1"><span class="Apple-converted-space">      </span>type: 'application/x-mpegURL'</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>$('#videoModal').on('hidden.bs.modal', function (e) {</p>
<p class="p1"><span class="Apple-converted-space">      </span>var player = window.player = videojs('example-video');</p>
<p class="p1"><span class="Apple-converted-space">      </span>player.pause();</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">  </span>})</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">function guid() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>function s4() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>return Math.floor((1 + Math.random()) * 0x10000)</p>
<p class="p1"><span class="Apple-converted-space">      </span>.toString(16)</p>
<p class="p1"><span class="Apple-converted-space">      </span>.substring(1);</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>return s4() + s4() + '-' + s4() + '-' + s4() + '-' +</p>
<p class="p1"><span class="Apple-converted-space">    </span>s4() + '-' + s4() + s4() + s4();</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function getCookie(cname) {</p>
<p class="p1"><span class="Apple-converted-space">  </span>var name = cname + "=";</p>
<p class="p1"><span class="Apple-converted-space">  </span>var ca = document.cookie.split(';');</p>
<p class="p1"><span class="Apple-converted-space">  </span>for (var i = 0; i &lt; ca.length; i++) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>var c = ca[i];</p>
<p class="p1"><span class="Apple-converted-space">    </span>while (c.charAt(0) == ' ') c = c.substring(1);</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (c.indexOf(name) == 0) return c.substring(name.length, c.length);</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>return "";</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function bindEvents() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>$('#agregar').on('click', function () {</p>
<p class="p1"><span class="Apple-converted-space">    </span>$.ajax({</p>
<p class="p1"><span class="Apple-converted-space">      </span>type: 'POST',</p>
<p class="p1"><span class="Apple-converted-space">      </span>url: API_URL + '/entries',</p>
<p class="p1"><span class="Apple-converted-space">      </span>data: JSON.stringify({ "id": $('#id').val(), "title": $('#title').val(), "price": $('#price').val() }),</p>
<p class="p1"><span class="Apple-converted-space">      </span>contentType: "application/json",</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>success: function (data) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>location.reload();</p>
<p class="p1"><span class="Apple-converted-space">      </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>return false;</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>$('#next2').on('click', function () {</p>
<p class="p1"><span class="Apple-converted-space">    </span>$.ajax({</p>
<p class="p1"><span class="Apple-converted-space">      </span>type: 'POST',</p>
<p class="p1"><span class="Apple-converted-space">      </span>url: API_URL + '/pagination',</p>
<p class="p1"><span class="Apple-converted-space">      </span>data: JSON.stringify({ "id": $('#next2').val() }),</p>
<p class="p1"><span class="Apple-converted-space">      </span>contentType: "application/json",</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>success: function (data) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>var valew = JSON.parse(JSON.stringify(data));</p>
<p class="p1"><span class="Apple-converted-space">        </span>if (valew.ScannedCount == 9) {</p>
<p class="p1"><span class="Apple-converted-space">          </span>document.frm.next2.value = valew.LastEvaluatedKey["id"];</p>
<p class="p1"><span class="Apple-converted-space">        </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">          </span>div = document.getElementById('next2');</p>
<p class="p1"><span class="Apple-converted-space">          </span>div.style.display = 'none';</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>$('#tbodyid').empty();</p>
<p class="p1"><span class="Apple-converted-space">        </span>data.Items.forEach(function (articleItem) {</p>
<p class="p1"><span class="Apple-converted-space">          </span>$('#tbodyid').append('&lt;div class="col-lg-4 col-md-6 mb-4"&gt;' + '&lt;div class="card h-100"&gt;' + '&lt;a href="#"&gt;' + '&lt;img class="card-img-top img-fluid" src="' + articleItem.img + '" alt=""&gt;' + '&lt;/a&gt;' + '&lt;div class="card-block"&gt;' + '&lt;h4 class="card-title"&gt;' + '&lt;a href="prod.html?idp_=' + articleItem.id + '" class="hrefch"&gt;' + articleItem.title + '&lt;/a&gt;' + '&lt;/h4&gt;' + '&lt;h5&gt;$' + articleItem.price + '&lt;/h5&gt;' + '&lt;p id="article" class="card-text"&gt;' + articleItem.desc + ' &lt;/p&gt;' + ' &lt;/div&gt;' + '&lt;/div&gt;' + '&lt;/div&gt;');</p>
<p class="p1"><span class="Apple-converted-space">        </span>})</p>
<p class="p1"><span class="Apple-converted-space">      </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>return false;</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>$('#prev2').on('click', function () {</p>
<p class="p1"><span class="Apple-converted-space">    </span>$.ajax({</p>
<p class="p1"><span class="Apple-converted-space">      </span>type: 'POST',</p>
<p class="p1"><span class="Apple-converted-space">      </span>url: API_URL + '/pagination',</p>
<p class="p1"><span class="Apple-converted-space">      </span>data: JSON.stringify({ "id": $('#prev2').val() }),</p>
<p class="p1"><span class="Apple-converted-space">      </span>contentType: "application/json",</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>success: function (data) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>var valew = JSON.parse(JSON.stringify(data));</p>
<p class="p1"><span class="Apple-converted-space">        </span>if (valew.ScannedCount == 9) {</p>
<p class="p1"><span class="Apple-converted-space">          </span>document.frm.next2.value = valew.LastEvaluatedKey["id"];</p>
<p class="p1"><span class="Apple-converted-space">          </span>document.getElementById('next2').style.display = 'block';</p>
<p class="p1"><span class="Apple-converted-space">        </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">          </span>div = document.getElementById('next2');</p>
<p class="p1"><span class="Apple-converted-space">          </span>div.style.display = 'none';</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>$('#tbodyid').empty();</p>
<p class="p1"><span class="Apple-converted-space">        </span>data.Items.forEach(function (articleItem) {</p>
<p class="p1"><span class="Apple-converted-space">          </span>$('#tbodyid').append('&lt;div class="col-lg-4 col-md-6 mb-4"&gt;' + '&lt;div class="card h-100"&gt;' + '&lt;a href="#"&gt;' + '&lt;img class="card-img-top img-fluid" src="' + articleItem.img + '" alt=""&gt;' + '&lt;/a&gt;' + '&lt;div class="card-block"&gt;' + '&lt;h4 class="card-title"&gt;' + '&lt;a href="prod.html?idp_=' + articleItem.id + '" class="hrefch"&gt;' + articleItem.title + '&lt;/a&gt;' + '&lt;/h4&gt;' + '&lt;h5&gt;$' + articleItem.price + '&lt;/h5&gt;' + '&lt;p id="article" class="card-text"&gt;' + articleItem.desc + ' &lt;/p&gt;' + ' &lt;/div&gt;' + '&lt;/div&gt;' + '&lt;/div&gt;');</p>
<p class="p1"><span class="Apple-converted-space">        </span>})</p>
<p class="p1"><span class="Apple-converted-space">      </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>return false;</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p1"><span class="Apple-converted-space">  </span>$('#videoModal').on('hidden.bs.modal', function () {</p>
<p class="p1"><span class="Apple-converted-space">    </span>var player = window.player = videojs('example-video');</p>
<p class="p1"><span class="Apple-converted-space">    </span>player.pause();</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p1">}</p>
<p class="p1">function showIt(eid) {</p>
<p class="p1"><span class="Apple-converted-space">  </span>// location.href= 'prod.html?idp_=' + eid + '&amp;tokenp_=' + token;</p>
<p class="p1"><span class="Apple-converted-space">  </span>// window.open('prod.html?idp_=' + eid +'&amp;tokenp_='+token);</p>
<p class="p1">}</p>
<p class="p1">function showcart() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>// location.href= 'cart.html?tokenp_=' + token;</p>
<p class="p1"><span class="Apple-converted-space">  </span>// window.open('cart.html?tokenp_=' + token);</p>
<p class="p1"><span class="Apple-converted-space">  </span>// window.open('cart.html?tokenp_=' + token,'_blank');</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function send() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById("recipient-email").value = "";</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById("recipient-name").value = "";</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById("message-text").value = "";</p>
<p class="p1"><span class="Apple-converted-space">  </span>alert('Thanks for the message!!');</p>
<p class="p1"><span class="Apple-converted-space">  </span>$('#exampleModal').modal('hide');</p>
<p class="p1"><span class="Apple-converted-space">  </span>location.reload();</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function byCat(cat) {</p>
<p class="p1"><span class="Apple-converted-space">  </span>$.ajax({</p>
<p class="p1"><span class="Apple-converted-space">    </span>type: 'POST',</p>
<p class="p1"><span class="Apple-converted-space">    </span>url: API_URL + '/bycat',</p>
<p class="p1"><span class="Apple-converted-space">    </span>data: JSON.stringify({ "cat": cat }),</p>
<p class="p1"><span class="Apple-converted-space">    </span>contentType: "application/json",</p>
<p class="p1"><span class="Apple-converted-space">    </span>success: function (data) {</p>
<p class="p1"><span class="Apple-converted-space">      </span>$('#tbodyid').empty();</p>
<p class="p1"><span class="Apple-converted-space">      </span>// var valew = JSON.parse(JSON.stringify(data));</p>
<p class="p1"><span class="Apple-converted-space">      </span>// document.frm.next2.value = valew.LastEvaluatedKey["id"];</p>
<p class="p1"><span class="Apple-converted-space">      </span>data.Items.forEach(function (articleItem) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>$('#tbodyid').append('&lt;div class="col-lg-4 col-md-6 mb-4"&gt;' + '&lt;div class="card h-100"&gt;' + '&lt;a href="prod.html?idp_=' + articleItem.id + '"&gt;' + '&lt;img class="card-img-top img-fluid" src="' + articleItem.img + '" alt=""&gt;' + '&lt;/a&gt;' + '&lt;div class="card-block"&gt;' + '&lt;h4 class="card-title"&gt;' + '&lt;a href="prod.html?idp_=' + articleItem.id + '" class="hrefch"&gt;' + articleItem.title + '&lt;/a&gt;' + '&lt;/h4&gt;' + '&lt;h5&gt;$' + articleItem.price + '&lt;/h5&gt;' + '&lt;p id="article" class="card-text"&gt;' + articleItem.desc + ' &lt;/p&gt;' + ' &lt;/div&gt;' + '&lt;/div&gt;' + '&lt;/div&gt;');</p>
<p class="p1"><span class="Apple-converted-space">      </span>})</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function logIn() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>var pass = b64EncodeUnicode(document.getElementById("loginpassword").value);</p>
<p class="p1"><span class="Apple-converted-space">  </span>var username = document.getElementById("loginusername").value;</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (pass == "" || username == "") {</p>
<p class="p1"><span class="Apple-converted-space">    </span>alert("Please fill out Username and Password.");</p>
<p class="p1"><span class="Apple-converted-space">  </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">    </span>$.ajax({</p>
<p class="p1"><span class="Apple-converted-space">      </span>type: 'POST',</p>
<p class="p1"><span class="Apple-converted-space">      </span>url: API_URL + '/login',</p>
<p class="p1"><span class="Apple-converted-space">      </span>data: JSON.stringify({ "username": username, "password": pass }),</p>
<p class="p1"><span class="Apple-converted-space">      </span>contentType: "application/json",</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>success: function (data) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>if (data.errorMessage == "Wrong password.") {</p>
<p class="p1"><span class="Apple-converted-space">          </span>alert("Wrong password.");</p>
<p class="p1"><span class="Apple-converted-space">        </span>} else if (data.errorMessage == "User does not exist.") {</p>
<p class="p1"><span class="Apple-converted-space">          </span>alert("User does not exist.");</p>
<p class="p1"><span class="Apple-converted-space">        </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">          </span>$('#logInModal').modal('hide');</p>
<p class="p1"><span class="Apple-converted-space">          </span>$('.modal-backdrop').hide();</p>
<p class="p1"><span class="Apple-converted-space">          </span>token = data.replace("Auth_token: ", "");</p>
<p class="p1"><span class="Apple-converted-space">          </span>document.cookie = "tokenp_=" + token;</p>
<p class="p1"><span class="Apple-converted-space">          </span>location.reload();</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">      </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function logOut() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.cookie = 'tokenp_' + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";</p>
<p class="p1"><span class="Apple-converted-space">  </span>location.href = 'index.html';</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function b64EncodeUnicode(str) {</p>
<p class="p1"><span class="Apple-converted-space">  </span>return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>return String.fromCharCode('0x' + p1);</p>
<p class="p1"><span class="Apple-converted-space">  </span>}));</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function register() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>var pass = b64EncodeUnicode(document.getElementById("sign-password").value);</p>
<p class="p1"><span class="Apple-converted-space">  </span>var username = document.getElementById("sign-username").value;</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (pass == "" || username == "") {</p>
<p class="p1"><span class="Apple-converted-space">    </span>alert("Please fill out Username and Password.");</p>
<p class="p1"><span class="Apple-converted-space">  </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">    </span>$.ajax({</p>
<p class="p1"><span class="Apple-converted-space">      </span>type: 'POST',</p>
<p class="p1"><span class="Apple-converted-space">      </span>url: API_URL + '/signup',</p>
<p class="p1"><span class="Apple-converted-space">      </span>data: JSON.stringify({ "username": username, "password": pass }),</p>
<p class="p1"><span class="Apple-converted-space">      </span>contentType: "application/json",</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>success: function (data) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>if (data.errorMessage == "This user already exist.") {</p>
<p class="p1"><span class="Apple-converted-space">          </span>alert("This user already exist.");</p>
<p class="p1"><span class="Apple-converted-space">        </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">          </span>$('#signInModal').modal('hide');</p>
<p class="p1"><span class="Apple-converted-space">          </span>$('.modal-backdrop').hide();</p>
<p class="p1"><span class="Apple-converted-space">          </span>alert("Sign up successful.");</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">      </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1">}</p>
<p class="p2"><br></p>
</body>
</html>
Ytext/htmlUutf-8_file:///index.html    ( ? Q g � � �c�c�c�                           c�