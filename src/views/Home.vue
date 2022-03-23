<template>
    <div class="home-page">
        <div class="home-page-content col-70">
            <div class="home-page-content-top content">
                <h3 class="home-page-title">
                    Уважаемый Экспонент
                </h3>

                <span class="home-page-description">
                    В этом разделе вы можете заказать дополнительные услуги, выбрать мебель и
                    оборудование для Вашего стенда, а также ознакомиться с общей информацией,
                    правилами и расписанием работы выставки.
                </span>

                <figure class="home-page-images">
                    <img src="../assets/images/stand.png" alt="Стенд">
                </figure>

                <router-link to="/services" class="home-page-link home-page-link-services">
                    Заказать дополнительные услуги
                </router-link>

                <router-link to="/services" class="home-page-link home-page-link-edit">
                    Изменить существующий заказ
                </router-link>

                <router-link to="/services" class="home-page-link home-page-link-reject">
                    Отказаться от технических услуг
                </router-link>
            </div>

            <div class="home-page-content-bottom content">
                <h3 class="home-page-title">
                    Общая информация, расписание, правила:
                </h3>

                <div class="home-page-content-bottom__wrapper">
                    <div class="home-page-content-bottom__wrapper-images">
                        <figure>
                            <img src="../assets/images/book.png" alt="Руководство для участника">
                        </figure>
                    </div>

                    <div class="home-page-content-bottom__wrapper-info">
                        <ul class="home-page-content-bottom__wrapper-info-list">
                            <li
                                v-for="(item, index) in info"
                                :key="index"
                                class="home-page-content-bottom__wrapper-info-list-item"
                            >
                                {{ item.text }}
                            </li>
                        </ul>

                        <span class="home-page-content-bottom__wrapper-info-required">
                            *Обязательно к прочтению!
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="home-page-sidebar content col-30">
            <aside class="sidebar">
                123
            </aside>
        </div>
    </div>
</template>

<script>
/**
 * Главная страница сайта
 *
 * import @ is an alias to /src
 */
export default {
    name: 'Home',
    data() {
        return {
            info: [
                { text: 'План выставочного комплекса' },
                { text: 'Общая информация' },
                { text: 'Порядок работы в павильонах' },
                { text: 'Оборудованные стенды и чистая площадь' },
                { text: 'Противопожарные правила' },
                { text: 'Здоровье и безопасность' },
                { text: 'Доставка грузов и пр.' },
            ],
        };
    },
};
</script>
