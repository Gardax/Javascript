var controls = (function () {

    function hidePrev(item) {
        var prev =item.previousElementSibling;
        while (prev) {
            var sublist=prev.querySelector("ul");
            if (sublist){
                sublist.style.display="none";
            }
            prev = prev.previousElementSibling;
        }
    }

    function hideNext(item) {
        var next = item.nextElementSibling;
        while (next) {
            var sublist = next.querySelector("ul");
            if (sublist) {
                sublist.style.display = "none";
            }
            next = next.nextElementSibling;
        }
    }
    function Accordion(selector) {

        var items = [];
        var accItem = document.querySelector(selector);
        accItem.addEventListener("click",
            function (ev) {
                if (!ev) {
                    ev = window.event;
                }
                ev.stopPropagation();
                ev.preventDefault();
                //a element
                var clickedItem = ev.target;
                if (!(clickedItem instanceof HTMLAnchorElement)) {
                    return;
                }

                hidePrev(clickedItem.parentNode);
                hideNext(clickedItem.parentNode);

                var sublist = clickedItem.nextElementSibling;
                var sublistDisplay = "";
                if (!sublist) {
                    return;
                }
                if (sublist.style.display === "none") {
                    sublist.style.display = "";
                } else {
                    sublist.style.display = "none";
                }
                
                sublist.style.display = sublistDisplay;

            }, false)
        var itemsList = document.createElement("ul");

        this.add = function (title) {
            var newItem = new Item(title);
            items.push(newItem);
            return newItem;
        }

        this.render = function () {
            while (accItem.firstChild) {
                accItem.removeChild(accItem.firstChild);
            }
            
            var thisList = itemsList.cloneNode(true);
            
            for (var i = 0; i < items.length; i++) {
                var domItem = items[i].render();
                thisList.appendChild(domItem);
            }
            accItem.appendChild(thisList);
            return this;
        };
    }

    function Item(title) {

        var items = [];
        this.add = function (title) {
            var newItem = new Item(title);
            items.push(newItem);
            return newItem;
        }

        this.render = function () {
            var itemNode = document.createElement("li");

            itemNode.innerHTML = "<a href='#' >" + title; +"</a>";

            if (items.length > 0) {
                var sublist = document.createElement("ul");
                sublist.style.display = "none";
                for (var i = 0; i < items.length; i++) {
                    var subItem = items[i].render();
                    sublist.appendChild(subItem);
                }
                itemNode.appendChild(sublist);

            }
            return itemNode;
        }
    }

    return {
        getAccordion: function (selector) {
            return new Accordion(selector);
        }
    }
}());