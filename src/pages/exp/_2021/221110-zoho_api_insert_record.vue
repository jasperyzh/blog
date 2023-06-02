<template>
    <pre>221117-latest_version is with mckl_astro_openday/scholarship</pre>
    <form action="https://crm.zoho.com/crm/WebToLeadForm" name="WebToLeads4875945000004073003" method="POST">

        <!-- // xnQsjsdp
        // zc_gad
        // xmIwtLD
        // actionType
        // returnURL -->

        <!-- const -->
        <input type="hidden" name="xnQsjsdp" value="4d9f4e6fae5a20e0cd8c2a36a070b76984439065bac62cc4cea2c71c2a1d58fb" />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="hidden" name="actionType" value="TGVhZHM=" />

        <!-- var -->
        <input type="hidden" name="xmIwtLD" value="3df8513a44e8ee0dc6e36209ffd3db2439ef2cc150b37c8431e58c9fcba68bbe" />
        <input type="hidden" name="returnURL" :value="return_url" />

        <!-- user:required -->
        <!--// Last Name: {}"
            // Email: {}
            // Mobile: {} -->
        <div class="form-group">
            <label for="Last_Name">Full Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="Last_Name" name="Last Name" minlength="5" required />
        </div>
        <div class="form-group">
            <label for="Email">Email <span class="text-danger">*</span></label>
            <input type="email" class="form-control" id="Email" name="Email" required />
        </div>
        <div class="form-group">
            <label for="Last_Name">Phone <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="Mobile" name="Mobile" minlength="8" maxlength="12" required />
        </div>

        <!-- programme_interested -->
        <div class="form-group">
            <label for="programme_interested">I am interested in <span class="text-danger">*</span></label>
            <select class="form-control" name="programme_interested" id="programme_interested" required
                @change="onchange_programme_interested($event)">
                <option disabled="" selected value="">
                    - Please select your preferences -
                </option>

                <optgroup v-for="(optgroup, optgroup_index) in programme_interested" :key="optgroup_index"
                    :label="optgroup.title" :id="optgroup_index">
                    <option v-for="(option_name, option_index) in programme_interested[
                        optgroup_index
                    ].options" :key="option_index" :value="option_index" v-html="option_name"></option>
                </optgroup>
                <option value="none">Not Sure</option>
            </select>
        </div>
        <input v-for="(opt, opt_id) in programme_interested" type="hidden" :key="opt_id" :id="opt_id" :name="opt_id"
            :placeholder="opt.title" ref="output_programme_interested" />

        <!-- // LEADCF10: {} //microsite_interest -->
        <div id="microsite_interest" class="bg-white my-2 px-3 py-4 rounded">
            <p class="mb-2"><b>I'm interested in:</b></p>
            <div class="form-check">
                <input type="checkbox" name="LEADCF10" value="Personalised counselling with Senior Academicians"
                    id="check_counselling" class="form-check-input" />
                <label for="check_counselling" class="form-check-label">
                    Personalised counselling with Senior Academicians
                </label>
            </div>
            <div class="form-check">
                <input type="checkbox" name="LEADCF10" value="Scholarships" id="check_scholarship"
                    class="form-check-input" />
                <label for="check_scholarship" class="form-check-label">
                    Scholarships
                </label>
            </div>
        </div>

        <!-- // LEADCF1: {} //Lead Source. -->
        <input type="hidden" id="lead_source" name="LEADCF1" value="Microsite (MCKL Website)" />

        <!-- // LEADCF9: {} //Microsites Source -->
        <input type="hidden" id="microsite_source" name="LEADCF9" :value="microsite_source" />

        <!-- // LEADCF23: {} //Campus -->
        <select v-if="campus" class="form-select" id="campus" name="LEADCF23" required>
            <option disabled="" selected="" value="">- Select Campus -</option>
            <option v-for="(item, index) in campus" :key="index">
                {{ item }}
            </option>
        </select>
        <input v-else type="hidden" id="campus" name="LEADCF23" value="KL Campus" />

        <!-- // LEADCF5: {} //Latest Academic Qualification -->
        <select v-if="latest_academic_qualification" class="form-select" id="latest_academic_qualification"
            name="LEADCF5" required>
            <option disabled="" selected="" value="">- Highest Level of Education -</option>
            <option v-for="(item, index) in latest_academic_qualification" :key="index">
                {{ item }}
            </option>
        </select>

        <!-- // LEADCF11: {} //Remarks -->
        <input type="hidden" id="remarks" name="LEADCF11" value="" />

        <!-- agreement/tnc -->
        <div class="form-group">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="pdpn_agreement" required />
                <label class="form-check-label" for="pdpn_agreement">
                    I have read the College's
                    <a href="https://mckl.edu.my/legal-policies-and-notices/" target="_blank">Personal Data
                        Protection Notice</a>
                    and I give consent to the College to process my personal data
                    accordingly.
                </label>
            </div>
        </div>

        <!-- submit -->
        <input type="submit" id="formsubmit" class="btn btn-secondary" value="Submit" />
    </form>
</template>
  
<script setup>

import "bootstrap/scss/bootstrap.scss";

const campus = "";
const latest_academic_qualification = "";
/* const latest_academic_qualification = {
    "spm": "SPM",
    "igcse": "IGCSE",
    "pre_university": "Pre-University",
    "diploma": "Diploma",
    "other": "Other Qualifications",
}; */

/* const campus = {
    "KL Campus": "Kuala Lumpur Campus",
    "Penang Pykett Campus": "Pykett, Penang Campus"
} */

function onchange_programme_interested(event) {
    // get optgroup's id
    let input_target_id =
        event.target.querySelector("option:checked").parentElement.id;

    // fill in the hidden field ($refs are arrays of v-for elements)
    this.$refs.output_programme_interested.forEach((item) => {
        // check optgroup_id with selected_id
        item.value = item.id == input_target_id ? event.target.value : "";
    });
};

defineProps({
    return_url: {
        type: String,
        required: true
    },
    microsite_source: {
        type: String,
        required: true
    },

    // LEADCF7: {} //Preparatory Programmes
    // LEADCF20: {} //Pre-University
    // LEADCF19: {} //Diploma/Degree
    // LEADCF21: {} //Professional Accounting Programme
    // LEADCF22: {} //Centre for Professional Development
    programme_interested: {
        type: Object,
        default(rawProps) {
            return {
                // 220620 - options pulled from zoho-webform
                LEADCF7: {
                    title: "Preparatory Programmes",
                    options: {
                        "PREPCAL (OCTOBER)": "PREPCAL (OCTOBER)",
                        // "PREPAUSMAT (MAY)": "PREPAUSMAT (MAY)",
                        // "FLY Bootcamp": "FLY Bootcamp",
                    },
                },
                LEADCF20: {
                    title: "Pre-U / Foundation",
                    options: {
                        "Cambridge A Level": "Cambridge A Level",
                        "Cambridge A Level (German Pathway)":
                            "Cambridge A Level (German Pathway)",
                        AUSMAT: "Australian Matriculation",
                    },
                },
                LEADCF19: {
                    title: "Diploma & Degree",
                    options: {
                        ADTP: "American Degree Transfer Program",
                        "DECE (PT)": "Diploma in Early Childhood Education",
                        // "DECE (FT)": "",
                        "DSW (PT)": "Diploma in Social Work - NEW",
                        // "DSW (FT)": "",
                        DCS: "Diploma in Computer Science - NEW",
                        DIT: "Diploma in Information Technology - NEW",
                        DEC: "Diploma in E-Commerce - NEW",
                        DDM: "Diploma in Digital Marketing - NEW",
                        DIFT: "Diploma in Financial Technology - NEW",
                        // DDB: "Diploma in Digital Business - NEW",
                    },
                },
                LEADCF21: {
                    title: "Professional Accounting",
                    options: {
                        "ACCA FIA": "ACCA Foundation in Accountancy",
                        "ACCA (FT)": "Association of Chartered Certified Accountants",
                        // "ACCA (FT)": "",
                    },
                },
                LEADCF22: {
                    title: "Professional Development",
                    options: {
                        CICTL:
                            "Cambridge International Certificate in Teaching & Learning",
                        CIDTL: "Cambridge International Diploma in Teaching & Learning",
                        "International Certification of Digital Literacy":
                            "International Certification of Digital Literacy",
                        "Micro-Credentials in Social Work":
                            "Micro-Credentials in Social Work",
                        "Micro-Credentials in Early Childhood Education":
                            "Micro-Credentials in Early Childhood Education",
                        "Micro-credentials in Computer Science":
                            "Micro-credentials in Computer Science",
                        "Micro-credentials in Information Technology":
                            "Micro-credentials in Information Technology",
                        // "Micro-credentials in E-Commerce":
                        //   "Micro-credentials in E-Commerce",
                        // "Micro-credentials in Digital Marketing":
                        //   "Micro-credentials in Digital Marketing",
                        "Educational Management and Leadership for Private Education":
                            "Educational Management and Leadership for Private Education",
                        "Teaching &amp; Learning and Education Related Short Courses &amp; Workshop":
                            "Teaching &amp; Learning and Education Related Short Courses &amp; Workshop",
                        "Micro-Cred Computing &amp; Business":
                            "Micro-Cred Computing &amp; Business",
                        "AWS Academy": "AWS Academy",
                        // ICDL: "ICDL - The Digital Skills Standard", // International Certification of Digital Literacy
                        // "FLY Programme": "FLY Programme",
                    },
                },
            };
        },
    },
});
</script>