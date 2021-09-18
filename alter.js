
liff.init({ liffId: '1656440130-6NBEgWBb' })


function onTestChange() {
    var key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
        transform();
        return false;
    }
    else {
        return true;
    }
}

function transform(){
    let text = document.getElementById("orig").value;
    let text_array = text.trim().split('\n');
    
    let new_text = "";
    text_array.forEach(line => {
        let have_www = randomBool(0.3);
        let www_number = ( Math.floor ( Math.random() * 4 ) + 2 ) * have_www; // 最多7個，最少 2個
        let www = "w".repeat(www_number); 

        let have_postfix = randomBool(0.5);
        let postfix_index = Math.floor( Math.random() * postfixes.length );
        let postfix  = have_postfix ? ( '(' + postfixes[postfix_index]) : '' ;

        let have_prefix = randomBool(0.5);
        let prefix_index = Math.floor( Math.random() * prefixes.length );
        let prefix = have_prefix? prefixes[prefix_index] : '' ;

        new_text += `${prefix} ${line} ${www} ${postfix} <br />`;

    });

    document.getElementById("orig").value = '';
    liff.sendMessages([{
        'type': 'text',
        'text': new_text
    }])
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + '\n' + new_text;
}

function randomBool(p){
    return ( Math.random() < p ) ? 1 : 0;
}
