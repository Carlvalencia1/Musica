import React, { useState } from 'react';
import './SectionView.css';
import { getMember } from "../../data/BD";
import Button from "../atoms/Button";
import Label from '../atoms/Label';
import H6 from '../atoms/Descrition';
import CardsView from '../molecules/CardsView';
import FieldViewMember from '../molecules/FieldViewMember';


function SectionView() {
    const [membersView, setMembersView] = useState([]);

    const handleView = (event) => {
        let membersCards = [];
        for (let i = getMember().length - 1; i >= 0; i--) {
            let member= getMember()[i];
            membersCards.push(
                <CardsView key={member.user}  
                user={member.user} 
                email={member.email} 
                password={member.password}>
                </CardsView>
            );
        }

        setMembersView(membersCards);
    };

    return (
        <div className='members'>
            <FieldViewMember title={"Members"}></FieldViewMember>
            <div>{membersView}</div>
            <Button text={"View members"} onClick={handleView}></Button>
            <img className="image" src="fondo1.png" alt="" />
        </div>
    );
}


export default SectionView;
