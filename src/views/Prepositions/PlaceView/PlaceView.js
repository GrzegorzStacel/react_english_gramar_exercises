import React from 'react'
import AppContext from '../../../components/context';
import ListWrapper from '../../../components/ListWrapper/ListWrapper'
import Explanation from '../../../components/Explanation/Explanation';

const PlaceaView = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <>
                    <p>This is an Place View</p>
                    <ListWrapper
                        items={context.itemsPlace}
                        setStateAndUpdate={context.setStateAndUpdate}
                        />
                    <Explanation />
                </>
            )}
        </AppContext.Consumer>
    )
}

export default PlaceaView
