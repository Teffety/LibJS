'use strict';
const css = document.createElement('link');
const link = 'main.css';
css.setAttribute('href', link);
css.rel = 'stylesheet';

document.head.appendChild(css);

export default class Component {

  header(name) {
    let div = document.createElement('div');
    let head = document.createElement('header');
    if (name != undefined) {
      head.id = name;
    }

    return div.appendChild(head);
  }
  nav(name) {
    let div = document.createElement('div');
    let head = document.createElement('nav');
    if (name != undefined) {
      head.id = name;
    }

    return div.appendChild(head);
  }
  main(name) {
    let div = document.createElement('div');
    let main = document.createElement('main');
    if (name != undefined) {
      main.id = name;
    }

    return div.appendChild(main);
  }
  footer(name) {
    let div = document.createElement('div');
    let footer = document.createElement('footer');
    if (name != undefined) {
      footer.id = name;
    }

    return div.appendChild(footer);
  }
  Img(image) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.className = "image";
    if (image != undefined) img.src = image;

    return div.appendChild(img);
  }

  h1(name) {
    let div = document.createElement('div');
    let h = document.createElement('h1');
    if (name != undefined) {
      h.innerHTML = name;
    }
    return div.appendChild(h);
  }

  h2(name) {
    let div = document.createElement('div');
    let h = document.createElement('h2');
    if (name != undefined) {
      h.innerHTML = name;
    }
    return div.appendChild(h);
  }

  h3(name) {
    let div = document.createElement('div');
    let h = document.createElement('h3');
    if (name != undefined) {
      h.innerHTML = name;
    }
    return div.appendChild(h);
  }

  h4(name) {
    let div = document.createElement('div');
    let h = document.createElement('h4');
    if (name != undefined) {
      h.id = name;
    }
    return div.appendChild(h);
  }

  h5(name) {
    let div = document.createElement('div');
    let h = document.createElement('h5');
    if (name != undefined) {
      h.innerHTML = name;
    }
    return div.appendChild(h);
  }

  h6(name) {
    let div = document.createElement('div');
    let h = document.createElement('h6');
    if (name != undefined) {
      h.innerHTML = name;
    }
    return div.appendChild(h);
  }

  div(name) {
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    if (name != undefined) {
      div2.className = name;
    }
    return div.appendChild(div2);
  }

  a(arr) { //name, href, id, value

    let div = document.createElement('div');
    let a = document.createElement('a');
    if (arr.name != undefined) {
      a.className = arr.name;
    };
    if (arr.href != undefined) {
      a.href = arr.href;
    };
    if (arr.id != undefined) {
      a.id = arr.id;
    };
    if (arr.value != undefined) {
      a.innerHTML = arr.value;
    };

    return div.appendChild(a);
  }

  button(arr) {//name, href, id, value
    let div = document.createElement('div');
    let button = document.createElement('button');
    if (arr.name != undefined) {
      button.className = arr.name;
    };
    if (arr.href != undefined) {
      button.href = arr.href;
    };
    if (arr.id != undefined) {
      button.id = arr.id;
    };
    if (arr.value != undefined) {
      button.innerHTML = arr.value;
    };
    return div.appendChild(button);
  }

  span(name) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    if (name != undefined) {
      span.innerHTML = name;
    }

    return div.appendChild(span);
  }

  p(name) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    if (name != undefined) {
      p.innerHTML = name;
    }

    return div.appendChild(p);
  }
  input(arr) { //name, href, id, value, type
    let div = document.createElement('div');
    let input = document.createElement('input');
    if (arr.name != undefined) {
      input.className = arr.name;
    };
    if (arr.href != undefined) {
      input.href = arr.href;
    };
    if (arr.id != undefined) {
      input.id = arr.id;
    };
    if (arr.value != undefined) {
      input.placeholder = arr.value;
    };
    if (arr.type != undefined) {
      input.type = arr.type;
    };
    return div.appendChild(input);
  }

  form(name) {
    let div = document.createElement('div');
    let form = document.createElement('form');
    if (name != undefined)  form.className = name;

    return div.appendChild(form);
  }

  label(arr) {//arr , for
    let div = document.createElement('div');
    let label = document.createElement('label');
    if (arr.name != undefined) {
      label.innerHTML = arr.name
    };
    if (arr.for != undefined) {
      label.setAttribute("for", arr.for)
    };

    return div.appendChild(label);
  }

  checkbox(arr) { //name,boolean
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    div2.className = 'checkbox';
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    checkbox.id = arr.name;
    checkbox.type = "checkbox";
    label.setAttribute("for", checkbox);
    if (arr.name != undefined) {
      label.innerHTML = arr.name
    };
    div2.appendChild(checkbox);
    div2.appendChild(label);

    return div.appendChild(div2);
  }

  radio(arr) {
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    div2.className = 'radio';
    let radio = document.createElement('input');
    let label = document.createElement('label');
    radio.id = arr.name;
    radio.type = "radio";
    label.setAttribute("for", radio);
    if (arr.name != undefined) {
      label.innerHTML =arr. name
    };
    div2.appendChild(radio);
    div2.appendChild(label);

    return div.appendChild(div2);
  }

  table() {
    let div = document.createElement('div');
    const table = document.createElement('table');
    return div.appendChild(table);
  }


  tr() {
    let div = document.createElement('div');
    let tr = document.createElement('tr');
    return div.appendChild(tr);

  }

  th(name) {
    let div = document.createElement('div');
    let tComponent = document.createElement('th');
    if (name != undefined) {
      tComponent.innerHTML = name
    };
    return div.appendChild(tComponent);

  }

  td(name) {
    let div = document.createElement('div');
    let tComponent = document.createElement('td');
    if (name != undefined) {
      tComponent.innerHTML = name
    };
    return div.appendChild(tComponent);

  }


  select(arr) {
    let div = document.createElement('div');
    let select = document.createElement('select');
    let option = document.createElement('option');
    for(let key in arr) {

        option.value = arr[key];
        option.innerHTML = arr[key];

        let options = option.cloneNode(true);
        select.appendChild(options);
      }

      return div.appendChild(select);

  }

  thumbnail(arr) {//paneImage,pathFile,name

    let div = document.createElement('div');
    let a = document.createElement('a');
    let img = document.createElement('img');
    let span = document.createElement('span');
    img.className = "image";
    img.src = arr.paneImage;
    img.setAttribute('style', ' height: 25px%; width: 25px;')
    a.href = arr.pathFile + arr.name;
    let target = ['.jpg', '.docx', '.png', '.pdf', '.doc', '.xlsx', '.xlsm'];


    for (let i = 0, length = target.length; i < length; i++) {
    arr.name.lastIndexOf(target[i]) >= 0 ? (span.innerHTML = arr.name.split(target[i])[0]) : '';
  }
  a.appendChild(img);
  a.appendChild(span);
  return div.appendChild(a);

}
ul(arr) {
  let div = document.createElement('div');
  let ul = document.createElement('ul');
  let li = document.createElement('li');
  if (arr.name != undefined) {
    ul.innerHTML = arr.name
  };
  if (Array.isArray(arr.li)) {

    for (let i = 0, leng = arr.li.length; i < leng; i++) {
      li.innerHTML = arr.li[i];
      let lis = li.cloneNode(true);
      ul.appendChild(lis);
    }

  }
  return div.appendChild(ul);
}

ol(arr) {
  let div = document.createElement('div');
  let ol = document.createElement('ol');
  let li = document.createElement('li');
  if (arr.name != undefined) {
    ul.innerHTML = arr.name
  };
  if (Array.isArray(arr.li)) {

    for (let i = 0, leng = arr.li.length; i < leng; i++) {
      li.innerHTML = arr.li[i];
      let lis = li.cloneNode(true);
      ol.appendChild(lis);
    }

  }
  return div.appendChild(ol);
}
/*
li() {
  let div = document.createElement('div');
  if (name != undefined) {
    tComponent.innerHTML = name
  };
  return div.appendChild(li);
}*/


}
