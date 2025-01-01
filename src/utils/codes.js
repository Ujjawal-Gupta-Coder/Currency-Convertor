const codes = [
    { currencyCode: "AED", countryCode: "AE", countryName: "United Arab Emirates" },
    { currencyCode: "AFN", countryCode: "AF", countryName: "Afghanistan" },
    { currencyCode: "XCD", countryCode: "AG", countryName: "Antigua and Barbuda" },
    { currencyCode: "ALL", countryCode: "AL", countryName: "Albania" },
    { currencyCode: "AMD", countryCode: "AM", countryName: "Armenia" },
    { currencyCode: "ANG", countryCode: "AN", countryName: "Netherlands Antilles" },
    { currencyCode: "AOA", countryCode: "AO", countryName: "Angola" },
    { currencyCode: "AQD", countryCode: "AQ", countryName: "Antarctica" },
    { currencyCode: "ARS", countryCode: "AR", countryName: "Argentina" },
    { currencyCode: "AUD", countryCode: "AU", countryName: "Australia" },
    { currencyCode: "AZN", countryCode: "AZ", countryName: "Azerbaijan" },
    { currencyCode: "BAM", countryCode: "BA", countryName: "Bosnia and Herzegovina" },
    { currencyCode: "BBD", countryCode: "BB", countryName: "Barbados" },
    { currencyCode: "BDT", countryCode: "BD", countryName: "Bangladesh" },
    { currencyCode: "XOF", countryCode: "BE", countryName: "Belgium" },
    { currencyCode: "BGN", countryCode: "BG", countryName: "Bulgaria" },
    { currencyCode: "BHD", countryCode: "BH", countryName: "Bahrain" },
    { currencyCode: "BIF", countryCode: "BI", countryName: "Burundi" },
    { currencyCode: "BMD", countryCode: "BM", countryName: "Bermuda" },
    { currencyCode: "BND", countryCode: "BN", countryName: "Brunei" },
    { currencyCode: "BOB", countryCode: "BO", countryName: "Bolivia" },
    { currencyCode: "BRL", countryCode: "BR", countryName: "Brazil" },
    { currencyCode: "BSD", countryCode: "BS", countryName: "Bahamas" },
    { currencyCode: "NOK", countryCode: "BV", countryName: "Bouvet Island" },
    { currencyCode: "BWP", countryCode: "BW", countryName: "Botswana" },
    { currencyCode: "BYR", countryCode: "BY", countryName: "Belarus" },
    { currencyCode: "BZD", countryCode: "BZ", countryName: "Belize" },
    { currencyCode: "CAD", countryCode: "CA", countryName: "Canada" },
    { currencyCode: "CDF", countryCode: "CD", countryName: "Democratic Republic of the Congo" },
    { currencyCode: "XAF", countryCode: "CF", countryName: "Central African Republic" },
    { currencyCode: "CHF", countryCode: "CH", countryName: "Switzerland" },
    { currencyCode: "CLP", countryCode: "CL", countryName: "Chile" },
    { currencyCode: "CNY", countryCode: "CN", countryName: "China" },
    { currencyCode: "COP", countryCode: "CO", countryName: "Colombia" },
    { currencyCode: "CRC", countryCode: "CR", countryName: "Costa Rica" },
    { currencyCode: "CUP", countryCode: "CU", countryName: "Cuba" },
    { currencyCode: "CVE", countryCode: "CV", countryName: "Cape Verde" },
    { currencyCode: "CYP", countryCode: "CY", countryName: "Cyprus" },
    { currencyCode: "CZK", countryCode: "CZ", countryName: "Czech Republic" },
    { currencyCode: "DJF", countryCode: "DJ", countryName: "Djibouti" },
    { currencyCode: "DKK", countryCode: "DK", countryName: "Denmark" },
    { currencyCode: "DOP", countryCode: "DO", countryName: "Dominican Republic" },
    { currencyCode: "DZD", countryCode: "DZ", countryName: "Algeria" },
    { currencyCode: "ECS", countryCode: "EC", countryName: "Ecuador" },
    { currencyCode: "EEK", countryCode: "EE", countryName: "Estonia" },
    { currencyCode: "EGP", countryCode: "EG", countryName: "Egypt" },
    { currencyCode: "ETB", countryCode: "ET", countryName: "Ethiopia" },
    { currencyCode: "EUR", countryCode: "FR", countryName: "France" },
    { currencyCode: "FJD", countryCode: "FJ", countryName: "Fiji" },
    { currencyCode: "FKP", countryCode: "FK", countryName: "Falkland Islands" },
    { currencyCode: "GBP", countryCode: "GB", countryName: "United Kingdom" },
    { currencyCode: "GEL", countryCode: "GE", countryName: "Georgia" },
    { currencyCode: "GGP", countryCode: "GG", countryName: "Guernsey" },
    { currencyCode: "GHS", countryCode: "GH", countryName: "Ghana" },
    { currencyCode: "GIP", countryCode: "GI", countryName: "Gibraltar" },
    { currencyCode: "GMD", countryCode: "GM", countryName: "Gambia" },
    { currencyCode: "GNF", countryCode: "GN", countryName: "Guinea" },
    { currencyCode: "GTQ", countryCode: "GT", countryName: "Guatemala" },
    { currencyCode: "GYD", countryCode: "GY", countryName: "Guyana" },
    { currencyCode: "HKD", countryCode: "HK", countryName: "Hong Kong" },
    { currencyCode: "HNL", countryCode: "HN", countryName: "Honduras" },
    { currencyCode: "HRK", countryCode: "HR", countryName: "Croatia" },
    { currencyCode: "HTG", countryCode: "HT", countryName: "Haiti" },
    { currencyCode: "HUF", countryCode: "HU", countryName: "Hungary" },
    { currencyCode: "IDR", countryCode: "ID", countryName: "Indonesia" },
    { currencyCode: "ILS", countryCode: "IL", countryName: "Israel" },
    { currencyCode: "INR", countryCode: "IN", countryName: "India" },
    { currencyCode: "IQD", countryCode: "IQ", countryName: "Iraq" },
    { currencyCode: "IRR", countryCode: "IR", countryName: "Iran" },
    { currencyCode: "ISK", countryCode: "IS", countryName: "Iceland" },
    { currencyCode: "JMD", countryCode: "JM", countryName: "Jamaica" },
    { currencyCode: "JOD", countryCode: "JO", countryName: "Jordan" },
    { currencyCode: "JPY", countryCode: "JP", countryName: "Japan" },
    { currencyCode: "KES", countryCode: "KE", countryName: "Kenya" },
    { currencyCode: "KGS", countryCode: "KG", countryName: "Kyrgyzstan" },
    { currencyCode: "KHR", countryCode: "KH", countryName: "Cambodia" },
    { currencyCode: "KMF", countryCode: "KM", countryName: "Comoros" },
    { currencyCode: "KPW", countryCode: "KP", countryName: "North Korea" },
    { currencyCode: "KRW", countryCode: "KR", countryName: "South Korea" },
    { currencyCode: "KWD", countryCode: "KW", countryName: "Kuwait" },
    { currencyCode: "KYD", countryCode: "KY", countryName: "Cayman Islands" },
    { currencyCode: "KZT", countryCode: "KZ", countryName: "Kazakhstan" },
    { currencyCode: "LAK", countryCode: "LA", countryName: "Laos" },
    { currencyCode: "LBP", countryCode: "LB", countryName: "Lebanon" },
    { currencyCode: "LKR", countryCode: "LK", countryName: "Sri Lanka" },
    { currencyCode: "LRD", countryCode: "LR", countryName: "Liberia" },
    { currencyCode: "LSL", countryCode: "LS", countryName: "Lesotho" },
    { currencyCode: "LTL", countryCode: "LT", countryName: "Lithuania" },
    { currencyCode: "LVL", countryCode: "LV", countryName: "Latvia" },
    { currencyCode: "LYD", countryCode: "LY", countryName: "Libya" },
    { currencyCode: "MAD", countryCode: "MA", countryName: "Morocco" },
    { currencyCode: "MDL", countryCode: "MD", countryName: "Moldova" },
    { currencyCode: "MGA", countryCode: "MG", countryName: "Madagascar" },
    { currencyCode: "MKD", countryCode: "MK", countryName: "North Macedonia" },
    { currencyCode: "MMK", countryCode: "MM", countryName: "Myanmar" },
    { currencyCode: "MNT", countryCode: "MN", countryName: "Mongolia" },
    { currencyCode: "MOP", countryCode: "MO", countryName: "Macau" },
    { currencyCode: "MRO", countryCode: "MR", countryName: "Mauritania" },
    { currencyCode: "MTL", countryCode: "MT", countryName: "Malta" },
    { currencyCode: "MUR", countryCode: "MU", countryName: "Mauritius" },
    { currencyCode: "MVR", countryCode: "MV", countryName: "Maldives" },
    { currencyCode: "MWK", countryCode: "MW", countryName: "Malawi" },
    { currencyCode: "MXN", countryCode: "MX", countryName: "Mexico" },
    { currencyCode: "MYR", countryCode: "MY", countryName: "Malaysia" },
    { currencyCode: "MZN", countryCode: "MZ", countryName: "Mozambique" },
    { currencyCode: "NAD", countryCode: "NA", countryName: "Namibia" },
    { currencyCode: "NGN", countryCode: "NG", countryName: "Nigeria" },
    { currencyCode: "NIO", countryCode: "NI", countryName: "Nicaragua" },
    { currencyCode: "NOK", countryCode: "NO", countryName: "Norway" },
    { currencyCode: "NPR", countryCode: "NP", countryName: "Nepal" },
    { currencyCode: "NZD", countryCode: "NZ", countryName: "New Zealand" },
    { currencyCode: "OMR", countryCode: "OM", countryName: "Oman" },
    { currencyCode: "PAB", countryCode: "PA", countryName: "Panama" },
    { currencyCode: "PEN", countryCode: "PE", countryName: "Peru" },
    { currencyCode: "PGK", countryCode: "PG", countryName: "Papua New Guinea" },
    { currencyCode: "PHP", countryCode: "PH", countryName: "Philippines" },
    { currencyCode: "PKR", countryCode: "PK", countryName: "Pakistan" },
    { currencyCode: "PLN", countryCode: "PL", countryName: "Poland" },
    { currencyCode: "PYG", countryCode: "PY", countryName: "Paraguay" },
    { currencyCode: "QAR", countryCode: "QA", countryName: "Qatar" },
    { currencyCode: "RON", countryCode: "RO", countryName: "Romania" },
    { currencyCode: "RSD", countryCode: "RS", countryName: "Serbia" },
    { currencyCode: "RUB", countryCode: "RU", countryName: "Russia" },
    { currencyCode: "RWF", countryCode: "RW", countryName: "Rwanda" },
    { currencyCode: "SAR", countryCode: "SA", countryName: "Saudi Arabia" },
    { currencyCode: "SBD", countryCode: "SB", countryName: "Solomon Islands" },
    { currencyCode: "SCR", countryCode: "SC", countryName: "Seychelles" },
    { currencyCode: "SDG", countryCode: "SD", countryName: "Sudan" },
    { currencyCode: "SEK", countryCode: "SE", countryName: "Sweden" },
    { currencyCode: "SGD", countryCode: "SG", countryName: "Singapore" },
    { currencyCode: "SHP", countryCode: "SH", countryName: "Saint Helena" },
    { currencyCode: "SLL", countryCode: "SL", countryName: "Sierra Leone" },
    { currencyCode: "SOS", countryCode: "SO", countryName: "Somalia" },
    { currencyCode: "SRD", countryCode: "SR", countryName: "Suriname" },
    { currencyCode: "SSP", countryCode: "SS", countryName: "South Sudan" },
    { currencyCode: "STN", countryCode: "ST", countryName: "São Tomé and Príncipe" },
    { currencyCode: "SVC", countryCode: "SV", countryName: "El Salvador" },
    { currencyCode: "SYP", countryCode: "SY", countryName: "Syria" },
    { currencyCode: "SZL", countryCode: "SZ", countryName: "Swaziland" },
    { currencyCode: "THB", countryCode: "TH", countryName: "Thailand" },
    { currencyCode: "TJS", countryCode: "TJ", countryName: "Tajikistan" },
    { currencyCode: "TMT", countryCode: "TM", countryName: "Turkmenistan" },
    { currencyCode: "TND", countryCode: "TN", countryName: "Tunisia" },
    { currencyCode: "TOP", countryCode: "TO", countryName: "Tonga" },
    { currencyCode: "TRY", countryCode: "TR", countryName: "Turkey" },
    { currencyCode: "TTD", countryCode: "TT", countryName: "Trinidad and Tobago" },
    { currencyCode: "TWD", countryCode: "TW", countryName: "Taiwan" },
    { currencyCode: "TZS", countryCode: "TZ", countryName: "Tanzania" },
    { currencyCode: "UAH", countryCode: "UA", countryName: "Ukraine" },
    { currencyCode: "UGX", countryCode: "UG", countryName: "Uganda" },
    { currencyCode: "USD", countryCode: "US", countryName: "United States" },
    { currencyCode: "UYU", countryCode: "UY", countryName: "Uruguay" },
    { currencyCode: "UZS", countryCode: "UZ", countryName: "Uzbekistan" },
    { currencyCode: "VEB", countryCode: "VE", countryName: "Venezuela" },
    { currencyCode: "VND", countryCode: "VN", countryName: "Vietnam" },
    { currencyCode: "VUV", countryCode: "VU", countryName: "Vanuatu" },
    { currencyCode: "WST", countryCode: "WS", countryName: "Samoa" },
    { currencyCode: "XAF", countryCode: "XA", countryName: "Africa" },
    { currencyCode: "YER", countryCode: "YE", countryName: "Yemen" },
    { currencyCode: "ZAR", countryCode: "ZA", countryName: "South Africa" },
    { currencyCode: "ZMW", countryCode: "ZM", countryName: "Zambia" },
    { currencyCode: "ZWL", countryCode: "ZW", countryName: "Zimbabwe" }
];


export default codes;
  