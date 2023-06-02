<template>
    <!-- https://github.com/rodionsibov/symmetrical-doodle -->
    <div class="tw-w-full tw-max-w-xl tw-p-3">
        <h1 class="tw-font-bold tw-text-5xl tw-text-center tw-text-indigo-700">
            Simple Quiz
        </h1>
        <div class="tw-bg-white tw-p-12 tw-rounded-lg tw-shadow-lg tw-w-full tw-mt-8">
            <div v-if="idx < count">
                <p class="tw-text-2xl tw-font-bold">{{ questions[idx]['question'] }}</p>
                <label v-for="(answer, index) in questions[idx].answers" :key="index" :for="index"
                    class="tw-block tw-mt-4 tw-border tw-border-gray-300 tw-rounded-lg tw-py-2 tw-px-6 tw-text-lg"
                    :class="{ 'hover:tw-bg-gray-100 cursor-pointer': selectedAnswer == '' }, { 'tw-bg-green-200': index == questions[idx].correctAnswer && selectedAnswer != '' }, { 'tw-bg-red-200': selectedAnswer == index }">
                    <input :id="index" type="radio" class="tw-hidden" :value="index" @change="answered($event)"
                        :disabled="selectedAnswer != ''" />
                    {{ answer }}
                </label>
                <div class="tw-mt-6 tw-flow-root">
                    <button @click="nextQuestion" v-show="selectedAnswer != '' && idx < count - 1"
                        class="tw-float-right tw-bg-indigo-600 tw-text-white tw-text-sm tw-font-bold tw-tracking-wide tw-rounded-full tw-px-5 tw-py-2">
                        Next &gt;
                    </button>
                    <button @click="showResults" v-show="selectedAnswer != '' && idx == count - 1"
                        class="tw-float-right tw-bg-indigo-600 tw-text-white tw-text-sm tw-font-bold tw-tracking-wide tw-rounded-full tw-px-5 tw-py-2">
                        Finish
                    </button>
                </div>
            </div>
            <div v-else>
                <h2 class="tw-text-bold tw-text-3xl">Results</h2>
                <div class="tw-flex tw-justify-start tw-space-x-4 tw-mt-6">
                    <p>
                        Correct Answers:
                        <span class="tw-text-2xl tw-text-green-700 tw-font-bold">{{ correctAnswers }}</span>
                    </p>
                    <p>
                        Wrong Answers:
                        <span class="tw-text-2xl tw-text-red-700 tw-font-bold">{{ wrongAnswers }}</span>
                    </p>
                </div>
                <div class="tw-mt-6 tw-flow-root">
                    <button @click="resetQuiz"
                        class="tw-float-right tw-bg-indigo-600 tw-text-white tw-text-sm tw-font-bold tw-tracking-wide tw-rounded-full tw-px-5 tw-py-2">
                        Play again
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            idx: 0,
            selectedAnswer: "",
            correctAnswers: 0,
            wrongAnswers: 0,
            count: 3,
            questions: [
                {
                    question:
                        "Rolex is a company that specializes in what type of product?",
                    answers: { a: "Bags", b: "Watches", c: "Shoes", d: "Laptops" },
                    correctAnswer: "b",
                },
                {
                    question: "When did Facebook launch?",
                    answers: { a: "2005", b: "2008", c: "2003", d: "2004" },
                    correctAnswer: "d",
                },
                {
                    question:
                        "Albert Einstein had trouble with mathematics when he was in school?",
                    answers: { a: "True", b: "False" },
                    correctAnswer: "b",
                },
            ],
        };
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value;
            if (this.selectedAnswer == this.questions[this.idx].correctAnswer) {
                this.correctAnswers++;
            } else {
                this.wrongAnswers++;
            }
        },
        nextQuestion() {
            this.idx++;
            this.selectedAnswer = "";
            document.querySelectorAll("input").forEach((el) => (el.checked = false));
        },
        showResults() {
            this.idx++;
        },
        resetQuiz() {
            this.idx = 0;
            this.selectedAnswer = "";
            this.correctAnswers = 0;
            this.wrongAnswers = 0;
        },
    },
}

</script>
<style lang="scss" scoped>
</style>