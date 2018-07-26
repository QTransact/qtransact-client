/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();




var tradeButton = document.getElementById('trade');
var inventoryButton = document.getElementById('inventory');
inventoryButton.classList.remove("btn-primary");
inventoryButton.classList.add("btn-secondary");

var mainBoard = document.getElementById('main-board');
var offerList = document.getElementById('offer-list');
var inventoryList = document.getElementById('inventory-list');

var current_display;
function switchDisplay( display ){
	if ( display === 'trade' ){
		if ( current_display !== 'trade' ){
			current_display = display;
			offerList.setAttribute('style', 'display:block;');
			inventoryList.setAttribute('style', 'display:none;');
			tradeButton.classList.remove("btn-secondary");
			tradeButton.classList.add("btn-primary");
			inventoryButton.classList.remove("btn-primary");
			inventoryButton.classList.add("btn-secondary");
		}
	}else{
		if ( display === 'inventory' ){
			if ( current_display !== 'inventory' ){
				current_display = display;
				offerList.setAttribute('style', 'display:none;');
				inventoryList.setAttribute('style', 'display:block;');
				tradeButton.classList.remove("btn-primary");
				tradeButton.classList.add("btn-secondary");
				inventoryButton.classList.remove("btn-secondary");
				inventoryButton.classList.add("btn-primary");
			}
		}
	}
}
switchDisplay('trade');

tradeButton.addEventListener('click', function( event ){
	switchDisplay('trade');
});

inventoryButton.addEventListener('click', function( event ){
	switchDisplay('inventory');
	//addInventoryItem({itemID: 10,game:"GTA 5 MP",image:"mustang.png",displayName:"Ford Mustang GT", name:"mustang", serverName:"Nitro GTA 5 Romania"});
});



function addInventoryItem( itemData ){
	var iDiv = document.createElement('div');
	iDiv.id = 'item-' + itemData.itemID;
	iDiv.className = 'block';
	iDiv.innerHTML=`<div class="media text-muted pt-3">
	  <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
		<strong class="d-block text-gray-dark">` + itemData.game + `</strong>
		
		<img src="img/` + itemData.image + `" style="height:64px;padding-right:10px">
		<strong>Item : </strong>` + itemData.displayName + `<br>
		<strong>Server : </strong>` + itemData.serverName + `<br>
		<button class="btn btn-primary my-1 box-shadow float-right">Sell Now</button>
	  </p>
	  </div>`;
	
	inventoryList.appendChild(iDiv);
}



addInventoryItem({itemID: 10,game:"GTA 5 MP",image:"mustang.png",displayName:"Ford Mustang GT", name:"mustang", serverName:"Nitro GTA 5 Romania"});
