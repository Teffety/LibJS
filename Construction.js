'use strict';

import Component from './Component.js';

let com = new Component();

export default class Construction {
  //Create Navbar with buttons
  Navbar(arr) {
    let nav = com.div('div');
    let navb = document.createElement('nav');
    for (let i = 0; i < arr.length; i++) {

      if (arr[i] == window.location.href) {

        let sub = com.a({
          name: 'sumbitNav active',
          href: (arr[i].paramt),
          id: (arr[i].name + " " + i),
          value: arr[i].name
        });
        let subs = sub.cloneNode(true);
        navb.appendChild(subs);

      } else {
        let sub = com.a({
          name: 'sumbitNav ',
          href: (arr[i].paramt),
          id: (arr[i].name + " " + i),
          value: arr[i].name
        });
        let subs = sub.cloneNode(true);
        navb.appendChild(subs);
      }
    }


    return nav.appendChild(navb);
  }


  Footer(footArr) {

    let footer = com.div('div');
    let foot = document.createElement('footer');
    footer.className = "footer";
    for (let i = 0; i < footArr.length; i++) {
      let a = com.a({
        href: ("#" + footArr[i].paramt),
        id: (footArr[i].name + " " + i),
        value: footArr[i].name
      });
      let as = a.cloneNode(true);
      foot.appendChild(as);
    }

    return footer.appendChild(foot);
  }

  Carusel(image, path) {
    ;
    let index = 1;

    let div = com.div();
    let carusel = com.div('carusel');
    let blocks = com.div('blocks');
    let prev = com.a({
      name: 'prev',
      value: '&#10094;'
    });
    let next = com.a({
      name: 'next',
      value: '&#10095;'
    });
    let i = image.length;
    let img = com.Img(path + image[i - 1]);
    carusel.appendChild(prev);
    blocks.appendChild(img);
    next.addEventListener('click', () => {
      (i < image.length) ? (i = i + 1) : (i = 1);

      img.className = "image fade";
      img.src = path + image[i - 1];
      blocks.appendChild(img);
    });

    prev.addEventListener('click', () => {
      (i < image.length + 1 && i > 1) ? (i = i - 1) : (i = image.length);
      img.className = "image fade";
      img.src = path + image[i - 1];
      blocks.appendChild(img);
    });
    carusel.appendChild(blocks);
    carusel.appendChild(next);
    return div.appendChild(carusel);
  }

  /*  Table() {

  }*/

  Card(arr) {
    let div = com.div();
    let card = com.div('card');;
    let pathDoc = 'document/';

    for (let i = 0; i < arr.length; i++) {

      let divId = com.div('card ' + arr[i].id);
      let divFil = com.div('divFil');
      let divImg = com.div('divImg');
      let a1 = com.a({
        href: arr[i].image
      });
      let h2 = com.h2(arr[i].name);
      let span = com.span(arr[i].text);
      let p1 = com.p(arr[i].author);
      let p2 = com.p(arr[i].time);
      divId.appendChild(h2);
      if (arr[i].image != null) {
        let img = com.Img(arr[i].image);
        img.className = "imageCard";
        a1.appendChild(img);
        divImg.appendChild(a1);

      };

      if (arr[i].doc != null) {

        if (arr[i].doc instanceof Array) {

          let arrDoc = arr[i].doc;
          let imForDoc = arr.imageIcon;
          arrDoc.forEach(function(item, i, arrDoc) {

            let span = com.span(item);
            let a2 = com.a({
              href: pathDoc + item
            });
            let img2 = com.Img(imForDoc);
            img2.className = "imForDoc";
            a2.appendChild(span);
            a2.appendChild(img2);
            let a3 = a2.cloneNode(true)
            divFil.appendChild(a3);

          });

        } else {

          let span = com.span(arr[i].doc);
          let a2 = com.a({
            href: pathDoc + arr[i].doc
          });
          let img2 = com.Img(imForDoc);
          img2.className = "imForDoc";
          a2.appendChild(span);
          a2.appendChild(img2);
          divFil.appendChild(a2);
        }
      };

      divId.appendChild(divFil);
      divId.appendChild(divImg);
      divId.appendChild(span);
      divId.appendChild(p1);
      divId.appendChild(p2);
      card.appendChild(divId);

    };
    return div.appendChild(card);
  }


  Form(index) {

    let div = com.div();
    let form = com.form('form');
    let docum = com.div('docum');
    for (let i = 0; i < index.length; i++) {
      form.innerHTML = index[0].name;
      form.id = index[0].name;
      if (index[i].nInput != null) {

        if (index[i].nInput instanceof Array) {

          for (let key in index[i].nInput) {
            let divLabel = com.div('');
            let input = com.input({
              name: index[i].nInput[key],
              id: 'label ' + key,
              type: 'text'
            });
            let label = com.label({
              name: index[i].nInput[key],
              for: 'label ' + key
            });
            divLabel.appendChild(label);
            divLabel.appendChild(input);
            let divLabels = divLabel.cloneNode(true);
            docum.appendChild(divLabels);
          }

        } else {
          let divLabel = com.div();
          let input = com.input({
            name: index[i].nInput,
            id: 'label',
            type: 'text'
          });
          let label = com.label({
            name: index[i].nInput,
            for: 'label'
          })
          divLabel.appendChild(label);
          divLabel.appendChild(input);
          docum.appendChild(divLabel);
        }

      }
      let button = com.button({
        name: index[i].button,
        value: index[i].button
      });
      let ckeckbox = com.checkbox(index[i].checkbox);
      let radio = com.radio(index[i].radio);
      form.appendChild(docum)
      form.appendChild(button);
      form.appendChild(ckeckbox);
      form.appendChild(radio);
    }
    return div.appendChild(form);
  }

  Tablo(arr) {
    let div = com.div('');
    let table = com.table();


    for (let i = 0; i < arr.length; i++) {
      let tz = com.tr();
      if (arr[i].th != undefined) {
        for (let key in arr[i].th) {

          let th = com.th(arr[i].th[key]);
          tz.id = 'th-head';
          let a3 = th.cloneNode(true)
          tz.appendChild(a3);
          table.appendChild(tz);
        }
      }
      let tr = com.tr();
      for (let key in arr[i].td) {

        let td = com.td(arr[i].td[key]);
        let ts = td.cloneNode(true);
        tr.appendChild(ts);

        table.appendChild(tr);
      };



    };
    return div.appendChild(table);
  }

  Pagination(massive) {
    let index = 0;

    const card = massive.elem.querySelectorAll('.card');;
    let div = com.div();
    const devPanel = com.div('pagination');
    //3 div components :
    // 1st- form select
    //2-nd blocks for pagination
    //3-d pagination elements

    const formDiv = com.div('pagination__panel__div') //1st element
    const blocksDiv = com.div('pagination__panel_div'); //2-nd element
    const conNumber = com.div('pagination__panel_div'); //3-d element
    devPanel.appendChild(formDiv);
    devPanel.appendChild(blocksDiv);
    devPanel.appendChild(conNumber);
    /*
        //1-st element
        if (massive.searchForm != false && massive.searchForm != undefined) {
          const form = com.form('pagination__panel__div__search-form');
          const search = com.input({
            name: 'pagination__panel__div__search-form__input',
            value: 'Искать...',
            type: 'text'
          }); // name, href, id, value, type
          const btn = com.button({
            name: 'pagination__panel__div__search-form__button',
            value: 'Поиск'
          }); //(name, href, id, value)}
          form.appendChild(search);
          form.appendChild(btn);
          formDiv.appendChild(form);
        }*/
    const opti = massive.size || [25, 50, 100];
    const select = com.select(opti);
    select.addEventListener('change', () => {
      paintBlock(select.value);
    });


    formDiv.appendChild(select);


    //2-nd element
    const paintBlock = (cnt = 25) => {
      blocksDiv.innerHTML = '';
      conNumber.innerHTML = '';
      let count = card.length; //всего записей
      let max_page = 5;
      let cnt_page = Math.ceil(count / cnt); //кол-во страниц

      for (let i = 0; i < count; i++) {
        if (i < cnt) {
          blocksDiv.appendChild(card[i]);
        }
      }

      //3-d element
      const arrowDiv = com.div('pagination__panel_div__arrowDiv');
      let prev = com.a({
        name: 'pagination__panel_div__arrowDiv__arrow prev disabled',
        value: '&#10094&#10094 '
      });


      let next = com.a({
        name: 'pagination__panel_div__arrowDiv__arrow next',
        value: '&#10095&#10095'
      });

      prev.addEventListener('click', (event) => {
        plusIndex(-1);
      });
      next.addEventListener('click', (event) => {
        plusIndex(1);
      });
      arrowDiv.appendChild(prev);
      arrowDiv.appendChild(next);

      for (let i = 0; i < cnt_page; i++) {
        if (i == 0) {
          let page = com.a({
            name: 'paginator active',
            id: 'page ' + (i + 1),
            value: i + 1
          });
          page.setAttribute('data-page', i * cnt);
          let pagez = page.cloneNode(true);
          arrowDiv.insertBefore(pagez, next);
        } else {
          let page = com.a({
            name: 'paginator',
            id: 'page ' + (i + 1),
            value: i + 1
          });
          page.setAttribute('data-page', i * cnt);
          let pagez = page.cloneNode(true);
          arrowDiv.insertBefore(pagez, next);
        }
      }

      let aNumbers = arrowDiv.querySelectorAll('.paginator');
      for (let i = 0; i < aNumbers.length; i++) {

        aNumbers[i].addEventListener('click', () => {
          currentIndex(i);

        })
      }

      const plusIndex = (n) => {
        pageChanger(index += n);
        console.log(index);
      }

      const currentIndex = (n) => {
        pageChanger(index = n);
        console.log(index);
      }

      const pageChanger = (index) => {

        blocksDiv.innerHTML = '';

        let main_page = document.getElementsByClassName('paginator');
        if (index == 0) {
          prev.className += ' disabled';
        } else if (index > 0) {
          prev.className = prev.className.replace('disabled', '');

        }
        if (index == cnt_page - 1) {
          next.className += ' disabled';

        } else {
          next.className = next.className.replace('disabled', '');
        }

        for (let x = 0; x < main_page.length; x++) {
          main_page[x].className = main_page[x].className.replace(' active', '');
        }

        main_page[index].className += " active";
        let j = 0;
        let indexPage;
        if (indexPage == 0) {
          indexPage = cnt;
        } else {
          indexPage = cnt * index;
        }

        for (let i = indexPage; i < card.length; i++) {
          if (j >= cnt) break;
          blocksDiv.appendChild(card[i]);
          j++;

        }
      }
      conNumber.appendChild(arrowDiv);
    }
    paintBlock();
    return div.appendChild(devPanel);
  }

  ModalWindow(arr) {
    let div = com.div();
    let modal = com.div('modal');
    let containerModal = com.div('modal__container-modal');
    let opaci = arr.opacity;
    let colorBack = arr.colorBack;
    let span = span.com('&times;');
    span.className = 'modal__container-modal__span-close';
    containerModal.appendChild(arr);
    modal.appendChild(span);
    modal.appendChild(containerModal);

    return div.appendChild(modal)
  }
}
