import React, { useState } from "react";

import { PageContainer } from "../../MainComponents";
import { PageArea, SearchArea } from "./styled";

import useApi from '../../helpers/OlxAPI';

const Page = () => {

    const api = useApi();

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?" />
                            <select name="state">
                            
                            </select>
                            <button>Pesquisar</button>    

                        </form>
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    ...
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;