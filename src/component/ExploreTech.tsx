import React, {use} from 'react';
import AllTech from './AllTech';
import { techType } from '../techType';
interface techProps{
    techPromise:Promise<techType[]>
}
const ExploreTech = ({techPromise}:techProps) => {
    const technologies = use(techPromise);

    return (
        <div>
            <AllTech technologies={technologies}></AllTech>
        </div>
    );
};

export default ExploreTech;