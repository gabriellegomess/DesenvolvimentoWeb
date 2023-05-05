function f_direction(e) {
    let property = e.options[e.selectedIndex].value;
    let flex_container = document.querySelector(".flex-container");
    flex_container.setAttribute("style", "flex-direction:" + property + ";");
}

function posicionamentos(){
    let jc = document.getElementById("justify_content");
    let ac = document.getElementById("align_content");
    let ai = document.getElementById("align_items");

    let justify_content = jc.options[jc.selectedIndex].value;
    let align_content = ac.options[ac.selectedIndex].value;
    let align_items = ai.options[ai.selectedIndex].value;

    let flex_container = document.querySelector(".flex-container.posicionamentos.monoline");
    flex_container.setAttribute("style",
                                "justify-content:" + justify_content +
                                ";align-content:" + align_content + ";align-items:" + align_items + ";");
}

function posicionamentos_multiline(){
    let jc = document.getElementById("justify_content_m");
    let ac = document.getElementById("align_content_m");
    let ai = document.getElementById("align_items_m");

    let justify_content = jc.options[jc.selectedIndex].value;
    let align_content = ac.options[ac.selectedIndex].value;
    let align_items = ai.options[ai.selectedIndex].value;

    let flex_container = document.querySelector(".flex-container.posicionamentos.multiline");
    flex_container.setAttribute("style",
                                "justify-content:" + justify_content +
                                ";align-content:" + align_content + ";align-items:" + align_items + ";");
}

