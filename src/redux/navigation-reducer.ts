let initialState = {
    friends: [
        {id: 1, nickname: 'Dimon', ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
        {id: 2, nickname: 'Vasiliy', ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
        {id: 3, nickname: 'tilipon85',ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
        {id: 4, nickname: 'tilipon85',ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
        {id: 5, nickname: 'tilipon85',ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
        {id: 6, nickname: 'tilipon85',ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
        {id: 7, nickname: 'tilipon85',ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
        {id: 8, nickname: 'tilipon85',ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
    ]
}

export type NavbarInitialStateType = typeof initialState

type ActionTypes = null

const navigationReducer =  (state: NavbarInitialStateType = initialState, action: ActionTypes) => state

export default navigationReducer;