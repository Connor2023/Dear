import React from "react";
import SelectionItem from "./selectionitem";

const ActivitySelection: React.FC<{}> = () => {
    return (
        <div className="flex flex-row flex-wrap w-full gap-10 justify-center mt-4">
            <SelectionItem subject="Brandy" imageUrl = "https://au.brandymelville.com/cdn/shop/files/MW931A-58S0020000_0.jpg?v=1692318216"
            subjectTitle="Brandy Melville" subjectDetail="We go browse and buy 'sth' from South Yarra"
            subjectUrl="https://au.brandymelville.com/"/>
            <SelectionItem subject="Flowers" imageUrl = "https://www.thegardener.co.za/wp-content/uploads/2022/07/20211230_082031-copy.jpg"
            subjectTitle="Roses??" subjectDetail="I get flowers as gift for you, the type will be a surprise"
            subjectUrl="https://www.busybeeflorist.com.au/"/>
            <SelectionItem subject="Chocolates" imageUrl = "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2021/03/homemade-vegan-chocolate-macro-800x1200.jpg"
            subjectTitle="Matcha Chocolate" subjectDetail="You like matcha and hazelnut chocolate so I get those flavours of chocolate"
            subjectUrl="https://www.sweetas.net.au/"/>
            <SelectionItem subject="NGV" imageUrl = "https://upload.wikimedia.org/wikipedia/commons/0/08/NGV_Melbourne_2019.jpg"
            subjectTitle="NGV" subjectDetail="We meet in city morning and browse NGV / Finish Melbourne Museum"
            subjectUrl="https://www.ngv.vic.gov.au/"/>
            <SelectionItem subject="Painting" imageUrl = "https://kmartau.mo.cloudinary.net/98bc5471-a353-48d1-aa9d-fd7008da47fc.jpg?tx=w_640,h_640"
            subjectTitle="Colour by Numbers" subjectDetail="I already have it, just sitting in my room neglected because did not want to do it last time I suggested it"
            subjectUrl="https://www.kmart.com.au/product/3-pack-paint-by-numbers-birds-43329069/"/>
        </div>
    );
}

export default ActivitySelection;