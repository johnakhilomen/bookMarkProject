import {endpointURL} from "./params.js"
//import { STORE } from "./store.js";
import $ from "jquery";
import cuid from 'cuid';
import {generateButton} from "./generateForm.js";

export let loadBookMarks = () => {
    console.log(endpointURL)
    fetch(endpointURL, { method: 'GET'})
    .then(res => res.json())
    .then(STORE => 
        {
            console.log(STORE);

            STORE.forEach((bookmark)=> {
                $("#bookmarkList ul").append(
                    `<div id="${bookmark.id}" data-id=${cuid()}><li><h2>${bookmark.title}<h2></li>
                    <li><i>${bookmark.url}</i></li>
                    <li><p>${bookmark.description}</p></li>
                    <li>${generateButton("Remove", "remove", bookmark.id)}</li></div>`
                )
                $(`#remove${bookmark.id}`).click((evt)=>{
                    const id = $(event.currentTarget).attr('data-id');
                    //$("div[id="+id+"]").remove();
                    deleteBookmark(id);
                })
            });
        });
}

export let addBookmark = (bookmark) => {

    fetch(endpointURL, {
        method: 'post',
        body:    JSON.stringify(bookmark),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => 
        {
            console.log(json);
            $("#msgInfo").html("Bookmark added")
        });
}

export let deleteBookmark = (id) => {

    fetch(endpointURL+"/"+id, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => 
        {
            $("#msgInfo").html("Bookmark deleted")
        });
}