export function RandomName (typeEnemy) {
    const being = [
        'орк',
        'разбойница',
        'воин',
        'нечто'
    ]
    const adjective = _.shuffle([
        'безбожный',
        'абсурдный',
        'агрессивный',
        'адский',
        'алый',
        'безвольный',
        'бездарный',
        'бездушный',
        'безобразный',
        'безрассудный',
        'безумный',
        'зловещий',
        'зубастый',
        'жадный',
        'агрессивный',
        'упрямый',
        'непослушный',
        'мерзкий',
        'ужасный',
        'отвратительный'
    ])
    const nameMale = _.shuffle([
        'Весемир',
        'Эскель',
        'Ламберт',
        'Койон',
        'Кагыр',
        'Гиселер',
        'Рееф',
        'Эмгыр',
        'Риенс',
        'Вильгефорц',
        'Ассирэ',
        'Доррегарай',
        'Изенгрим',
        'Аэлирэнн',
        'Торувьель',
        'Аваллак’х',
        'Филавандрель',
        'Дийкстра',
        'Лео',
        'Аэгар',
        'Банг',
        'Богомил',
        'Горан',
        'Гойник',
        'Душан',
        'Зоран',
        'Предраг',
        'Соблав',
        'Третьяк',
        'Ярополк'
    ])
    const nameOrk = _.shuffle([
        'Айкоанг',
        'Регкагрим',
        'Браното',
        'Джаураут',
        'Нафиул',
        'Регрвар',
        'Реггроум',
        'Баррендор',
        'Волзогрим',
        'Гонррок',
        'Веклирехт',
        'Крогфивар',
        'Уртаскрим',
        'Лхакренрим',
        'Гхокбетак',
        'Мальлигад',
        'Дагкарок',
        'Лоррун',
        'Акуаг',
        'Кроталаш',
        'Мальнадрак',
        'Крабелек',
        'Назфистан',
        'Тортахан',
        'Джакармок',
        'Гхокуто',
        'Каморгом',
        'Альгролаш',
        'Мальренрос',
        'Белргат'
    ])
    const nameFemale = _.shuffle([
        'Мильва',
        'Ангулема',
        'Искра',
        'Мистле',
        'Ассе',
        'Цирилла',
        'Фалька',
        'Калантэ',
        'Йеннифер',
        'Трисс',
        'Риенс',
        'Филиппа ',
        'Тиссая',
        'Фрингилья',
        'Шеала',
        'Сабрина',
        'Францеска',
        'Адда',
        'Райла',
        'Эсси',
        'Пряха',
        'Шептуха'
    ])
    if (typeEnemy === 'robber') {
        return (`${adjective[0].replace(/ый|ий/, 'ая')} ${being[1]} ${nameFemale[0]}`)
    }
    if (typeEnemy === 'ork') {
        return (`${adjective[0]} ${being[0]} ${nameOrk[0]}`)
    }
    if (typeEnemy === 'warrior') {
        return (`${adjective[0]} ${being[2]} ${nameMale[0]}`)
    }
    else return being[3]
}