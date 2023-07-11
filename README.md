# Dynamic Scale

This repository exports a react component which will render a piano scale with variable parameters as input. It is highly customisable. It is generated dynamically by passing as props the required parameters using html `<svg>` component.

The component is bundled into an NPM package using rollup

Visit the website <https://dynamic-scale-frontend.vercel.app/> to customize the component and obtain the code for the same.

## Example Screenshots

![image](https://github.com/amrutwali/dynamic-scale/assets/54875908/d8c4d7c9-6a2d-4e87-ae37-c7a54160b3f1)

![image](https://github.com/amrutwali/dynamic-scale/assets/54875908/8d69d2f5-5c24-415b-ae5e-53a242ea43db)

![image](https://github.com/amrutwali/dynamic-scale/assets/54875908/94a89bbe-eebf-4c82-9164-28f9ce792d0c)

## Scale functional Component

`<Scale />` will be an independent standalone function that will genereate the required piano scale using all the input parameters

```jsx
<Scale
    labels = true
    half = false
    start = 'C'
    pressed = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    color_black = '#ff0055' 
    color_white = '#aa0044'
    width = '600px'
/>
```

## All Props and Types:

> Labels flagged with `*` Are mandatory

- _`labels`_ : **Boolean**  

  Displays key labels on the _white_ keys if set _`true`_  

  **Default** : _true_
---
- _`half`_ : **Boolean**

  Makes a scale of standard seven white keys if value is _`true`_. Otherwise the Scale will consist of `7 + 3` white keys.

  **Default** : _true_
---
- _`start`_ : **String** -or- **Char**

  Starts the _scale_ with the character that is passed as the parameter to be the first key of the _scale_. Note that only the notations for _white keys_ may be passed. As starting key should always be white. The preceeding or succeeding _black key_ if present will be visible with half of it displayed.  

  **Default** : _"C"_  

  **Accepted Values** : _['C', 'D', 'E', 'F', 'G', 'A', 'B']_
---
- _`pressed`_ : **Array [12 | 17]**

  Higlights the keys which are to be shown as pressed, with the color passed to the _color_white_ and the _color_black_ parameters.  
  The Array will contain position of the keys to be pressed starting from the white key which was set to the _start_ parameter. `0` for the key which should **not be pressed** `1` for the key to **be pressed** and so on. The numbers are going to be the respective position of the said key from the start key. Whatsoever key position is present in the array, will be highlited in color.  
  > Note that the size of the array should be `12` for a `half` scale with `7` _white keys_, and `17` for a `full` scale with `10` _white keys_  

  **Default** : _[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]_
---
- _`color_black`_ : **String**

  Will set the _pressed_ black keys to be the color passed to this parameter.  

  **Default** : `#FF0055`
---
- _`color_white`_ : **String**  
 
  Will set the _pressed_ white keys to be the color passed to this parameter.  

  **Default** : `#AA0044`
---
- _`width`_ * : **String**

  Sets the width of the finally rendered component. This parameter corresponds to a _in-line jsx_ width.
---

Frontend of the Scale Maker is linked here <https://github.com/amrutwali/dynamic-scale-frontend>
