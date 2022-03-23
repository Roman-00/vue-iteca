<template>
    <div class="catalog">
        <ul>
            <li
                v-for="product in products"
                :key="product.id"
            >
                {{ product.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

/**
 * Компонент каталога с товарами
 */
export default {
    name: 'catalog',
    data() {
        return {};
    },
    computed: {
        ...mapGetters([
            'products',
        ]),
    },
};
</script>
