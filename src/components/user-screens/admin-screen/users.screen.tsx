import { useState, useEffect } from "react";
import { IUser, IUsersRequest } from "../../../store/models/user";
import NextTable from "../../../UI/next-table/next.table";
import { Button } from "@nextui-org/react";

const UsersScreen = () => {
    
    const [selected, setSelected] = useState<number[]>([]);

    const [data, setData] = useState<IUser[]>([]);

    const handleSelect = (selectedItems: number[] | string) => {
        if(selectedItems === "all") {
            let arr: number[] = [];
            data.map((item) => arr.push(item.id))
            setSelected(arr);
        } else {
            let arr: number[] = [];
            (selectedItems as number[]).map((item) => arr.push(item))
            setSelected(arr);
        }
    }

    return <>
        <div className="flex w-full justify-center pt-8">
            <div className="flex flex-col w-full max-w-screen-2xl gap-8">
                <div className="flex flex-row justify-between bg-base-200 p-4 rounded-lg items-center">
                    <div className="flex flex-row justify-start items-center gap-4">
                        <Button variant='bordered'></Button>
                    </div>
                </div>
                <div className="flex flex-column w-full justify-center items-center"> 
                    {data.length > 0 ? <>
                        <NextTable 
                            data={data}
                            isSelectable
                            selected={selected}
                            handleSelect={handleSelect}
                        />
                    </> : <></>}
                </div> 
            </div>
        </div>
    </>
}

export default UsersScreen;