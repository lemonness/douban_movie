export default {
    item:{border:'1px dashed #ccc' ,padding:'10px', margin:'10px', boxShadow:'0 0 10px #ccc'},
    user:{fontsize:'15px'},
    cont:{fontsize:'12px'}
}


import React from 'react'
import styles from '@/components/styles'


export default function MyItems(props){
    return<div style={styles.item}>
        <p style={styles.user}>评论人：{props.user}</p>
        <p style={styles.cont}>评论内容:{props.cont}</p>
    </div>
}
