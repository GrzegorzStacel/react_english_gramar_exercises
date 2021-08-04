import React from 'react'
import AppContext from '../../../components/context';
import ListWrapper from '../../../components/ListWrapper/ListWrapper'
import Explanation from '../../../components/Explanation/Explanation';

const TimeView = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <>
                    <p>This is an Time View</p>
                    <ListWrapper
                        items={context.itemsTime}
                        setStateAndUpdate={context.setStateAndUpdate}
                    />
                    <Explanation />
                </>
            )}
        </AppContext.Consumer>
    )
}

export default TimeView
