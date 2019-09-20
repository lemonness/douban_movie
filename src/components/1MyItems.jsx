import React from 'react'
import cssobj from  '@/CSS/MyItems.scss'
console.log(cssobj)


export default function MyItems(props){
    return<div className={cssobj.item}>
        <p className={cssobj.user}>评论人：{props.user}</p>
        <p className={cssobj.content}>评论内容:{props.cont}</p>
    </div>
}
