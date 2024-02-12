import React from "react";
import SelectionItem from "./selectionitem";

const FoodSelection: React.FC<{}> = () => {
    return (
        <div className="flex flex-row flex-wrap w-full gap-10 justify-center mt-4">
            <SelectionItem subject="Banh Mi" imageUrl = "https://lh3.googleusercontent.com/p/AF1QipMAzVT9jjulXkYn2z91YRdAIuusloHOsRiBVSvC=s680-w680-h510"
            subjectTitle="Tabac Bakery" subjectDetail="4.6/5 - Banh Mi Restaurant in Springvale"
            subjectUrl="https://www.google.com/maps/place/Tabac+Bakery/@-37.9526613,145.1494373,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad614b8f3e4a2fb:0x7bab0ace1bba592d!8m2!3d-37.9526613!4d145.1520122!16s%2Fg%2F1q5hrncrr?hl=en-GB&entry=ttu"/>
            <SelectionItem subject="Thai" imageUrl = "https://tb-static.uber.com/prod/image-proc/processed_images/d8d63e78c66a65391c18cba0255a1fd0/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg"
            subjectTitle="Thanadee Thai Restaurant" subjectDetail="4.8/5 - Thai Restaurant in Oakleigh"
            subjectUrl="https://thanadeethai.com.au/"/>
            <SelectionItem subject="Souvlaki" imageUrl = "https://d1ralsognjng37.cloudfront.net/610ff227-fef3-45fa-a16d-25db6eb754b1"
            subjectTitle="Kalimera Souvlaki Art" subjectDetail="4.4/5 - Greek Food in Oakleigh"
            subjectUrl="https://kalimerasouvlakiart.com.au/"/>
            <SelectionItem subject="Vietnamese-French" imageUrl = "https://images.squarespace-cdn.com/content/v1/5acd4f713c3a53b7aad1123b/9896ebf7-a97f-4037-9747-1bfc4ffae805/le+feu+vietnamese+restaurant+in+brighton+australia+subject+image.jpg"
            subjectTitle="Le Feu Brighton" subjectDetail="4.6/5 - Vietnamese-French & Pan-Asian Fusion Restaurant in Brighton"
            subjectUrl="https://www.lefeu.com.au/restaurant/le-feu-brighton"/>
        </div>
    );
}

export default FoodSelection;