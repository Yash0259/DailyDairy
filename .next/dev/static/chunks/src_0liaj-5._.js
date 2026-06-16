(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/WeakList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeakList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function WeakList({ items, onDeleteItem }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "weak-list-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Future habits"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeakList.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Weak List"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeakList.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "muted",
                                children: "Keep the things you want to improve later, separate from today's tracker."
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeakList.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WeakList.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: [
                            items.length,
                            " queued"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WeakList.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeakList.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "weak-list-items",
                children: [
                    items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "weak-list-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "weak-list-card-top",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "weak-list-label",
                                                    children: "Weakness"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WeakList.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: item.weakness
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WeakList.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WeakList.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "delete-button",
                                            onClick: ()=>onDeleteItem(item.id),
                                            "aria-label": `Remove ${item.weakness}`,
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WeakList.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WeakList.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "weak-list-future",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Future habit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WeakList.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        item.futureHabit
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WeakList.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                item.note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "weak-list-note",
                                    children: item.note
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WeakList.tsx",
                                    lineNumber: 49,
                                    columnNumber: 26
                                }, this) : null
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/components/WeakList.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)),
                    items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "weak-list-empty",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No future habits yet."
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeakList.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Add one weakness you want to work on later."
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeakList.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WeakList.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeakList.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WeakList.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = WeakList;
var _c;
__turbopack_context__.k.register(_c, "WeakList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WeakListEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeakListEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function getDefaultFormState() {
    return {
        weakness: '',
        futureHabit: '',
        note: ''
    };
}
function WeakListEditor({ onAddItem }) {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getDefaultFormState);
    function handleSubmit(event) {
        event.preventDefault();
        const weakness = form.weakness.trim();
        const futureHabit = form.futureHabit.trim();
        const note = form.note.trim();
        if (!weakness || !futureHabit) {
            return;
        }
        onAddItem({
            weakness,
            futureHabit,
            note
        });
        setForm(getDefaultFormState());
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "weak-list-editor-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: "Future habits"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WeakListEditor.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Weak List setup"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WeakListEditor.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted",
                            children: "Build the future list here. The saved items stay in the right rail."
                        }, void 0, false, {
                            fileName: "[project]/src/components/WeakListEditor.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WeakListEditor.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/WeakListEditor.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "weak-list-form",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Weakness"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeakListEditor.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.weakness,
                                onChange: (event)=>setForm((current)=>({
                                            ...current,
                                            weakness: event.target.value
                                        })),
                                placeholder: "Example: Procrastination"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeakListEditor.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WeakListEditor.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Future habit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeakListEditor.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.futureHabit,
                                onChange: (event)=>setForm((current)=>({
                                            ...current,
                                            futureHabit: event.target.value
                                        })),
                                placeholder: "Example: Start with 15 minutes of focused work"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeakListEditor.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WeakListEditor.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Why it matters"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeakListEditor.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: form.note,
                                onChange: (event)=>setForm((current)=>({
                                            ...current,
                                            note: event.target.value
                                        })),
                                placeholder: "Short reminder for later."
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeakListEditor.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WeakListEditor.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "primary-button",
                        children: "Add to Weak List"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeakListEditor.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeakListEditor.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WeakListEditor.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(WeakListEditor, "dNA3WR0Sg3XIWRprtXHrkLj5YLo=");
_c = WeakListEditor;
var _c;
__turbopack_context__.k.register(_c, "WeakListEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/App.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeakList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WeakList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeakListEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WeakListEditor.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const STORAGE_KEY = 'habit-tracker-local-cache';
const THEME_KEY = 'habit-tracker-theme';
const COLOR_SWATCHES = [
    '#98d66c',
    '#f8b94d',
    '#ff8a72',
    '#70d6c3',
    '#87a7ff',
    '#e58dff'
];
const TODAY = new Date();
const HABIT_TEMPLATES = [
    {
        name: 'Wake up early',
        icon: '⏰',
        color: '#98d66c',
        trackingMode: 'check'
    },
    {
        name: 'Workout',
        icon: '💪',
        color: '#f8b94d',
        trackingMode: 'check'
    },
    {
        name: 'Reading',
        icon: '📚',
        color: '#70d6c3',
        trackingMode: 'check'
    },
    {
        name: 'Deep work',
        icon: '🎯',
        color: '#ff8a72',
        trackingMode: 'check'
    },
    {
        name: 'Study',
        icon: '📖',
        color: '#87a7ff',
        trackingMode: 'time',
        targetValue: 90,
        targetUnit: 'min'
    }
];
function pad(value) {
    return String(value).padStart(2, '0');
}
function formatDateKey(date) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
function normalizeSubtasks(input) {
    if (!Array.isArray(input)) {
        return [];
    }
    const seen = new Set();
    const subtasks = [];
    for (const item of input){
        if (typeof item !== 'string') {
            continue;
        }
        const subtask = item.trim();
        const key = subtask.toLowerCase();
        if (!subtask || seen.has(key)) {
            continue;
        }
        seen.add(key);
        subtasks.push(subtask);
    }
    return subtasks;
}
function createHabit(template) {
    const subtasks = normalizeSubtasks(template.subtasks);
    return {
        id: crypto.randomUUID(),
        name: template.name,
        icon: template.icon,
        color: template.color,
        isMajorTask: Boolean(template.isMajorTask || subtasks.length > 0),
        subtasks,
        trackingMode: template.trackingMode ?? 'check',
        targetValue: template.targetValue ?? null,
        targetUnit: template.targetUnit ?? (template.trackingMode === 'time' ? 'min' : 'check-ins'),
        entries: {},
        createdAt: new Date().toISOString()
    };
}
function getDefaultHabitForm() {
    return {
        name: '',
        icon: '✨',
        color: COLOR_SWATCHES[0],
        isMajorTask: false,
        subtasks: [],
        trackingMode: 'check',
        targetValue: '60',
        targetUnit: 'min'
    };
}
function createWeakListItem(input) {
    return {
        id: crypto.randomUUID(),
        weakness: input.weakness,
        futureHabit: input.futureHabit,
        note: input.note,
        createdAt: new Date().toISOString()
    };
}
function normalizeWeakListItem(input) {
    if (!input || typeof input !== 'object') {
        return null;
    }
    const candidate = input;
    const id = typeof candidate.id === 'string' && candidate.id.trim() ? candidate.id : null;
    const weakness = typeof candidate.weakness === 'string' && candidate.weakness.trim() ? candidate.weakness.trim() : null;
    const futureHabit = typeof candidate.futureHabit === 'string' && candidate.futureHabit.trim() ? candidate.futureHabit.trim() : null;
    const note = typeof candidate.note === 'string' ? candidate.note.trim() : '';
    if (!id || !weakness || !futureHabit) {
        return null;
    }
    return {
        id,
        weakness,
        futureHabit,
        note,
        createdAt: typeof candidate.createdAt === 'string' ? candidate.createdAt : new Date().toISOString()
    };
}
function normalizeConqueredHabit(input) {
    const habit = normalizeHabit(input);
    if (!habit || !input || typeof input !== 'object') {
        return null;
    }
    const candidate = input;
    return {
        ...habit,
        conqueredAt: typeof candidate.conqueredAt === 'string' ? candidate.conqueredAt : new Date().toISOString()
    };
}
function getHabitFormFromHabit(habit) {
    return {
        name: habit.name,
        icon: habit.icon,
        color: habit.color,
        isMajorTask: habit.isMajorTask,
        subtasks: habit.isMajorTask && habit.subtasks.length === 0 ? [
            ''
        ] : [
            ...habit.subtasks
        ],
        trackingMode: habit.trackingMode,
        targetValue: String(habit.targetValue ?? 60),
        targetUnit: habit.targetUnit || (habit.trackingMode === 'time' ? 'min' : 'check-ins')
    };
}
function normalizeHabitEntry(value, trackingMode) {
    if (trackingMode === 'time') {
        const numericValue = typeof value === 'number' ? value : typeof value === 'string' && value.trim() ? Number(value) : Number.NaN;
        if (Number.isFinite(numericValue) && numericValue >= 0) {
            return numericValue;
        }
        return undefined;
    }
    return value ? true : undefined;
}
function coerceHabitEntriesToMode(entries, trackingMode) {
    const nextEntries = {};
    for (const [dateKey, value] of Object.entries(entries)){
        if (trackingMode === 'time') {
            if (typeof value === 'number') {
                nextEntries[dateKey] = value;
            } else if (value) {
                nextEntries[dateKey] = 1;
            }
            continue;
        }
        if (value) {
            nextEntries[dateKey] = true;
        }
    }
    return nextEntries;
}
function inferTrackingMode(input) {
    if (input.trackingMode === 'time' || input.type === 'time' || input.mode === 'time') {
        return 'time';
    }
    const entries = input.entries ?? input.completions;
    if (entries && typeof entries === 'object' && !Array.isArray(entries)) {
        return Object.values(entries).some((value)=>typeof value === 'number') ? 'time' : 'check';
    }
    return 'check';
}
function normalizeHabit(input) {
    if (!input || typeof input !== 'object') {
        return null;
    }
    const candidate = input;
    const id = typeof candidate.id === 'string' && candidate.id.trim() ? candidate.id : null;
    const name = typeof candidate.name === 'string' && candidate.name.trim() ? candidate.name.trim() : null;
    const icon = typeof candidate.icon === 'string' && candidate.icon.trim() ? candidate.icon.trim() : '✨';
    const color = typeof candidate.color === 'string' && candidate.color.trim() ? candidate.color.trim() : COLOR_SWATCHES[0];
    const subtasks = normalizeSubtasks(candidate.subtasks);
    const isMajorTask = candidate.isMajorTask === true || candidate.taskType === 'major' || subtasks.length > 0;
    const trackingMode = inferTrackingMode(candidate);
    const rawTargetValue = candidate.targetValue ?? candidate.goalValue ?? candidate.targetMinutes;
    const targetValue = typeof rawTargetValue === 'number' && Number.isFinite(rawTargetValue) && rawTargetValue > 0 ? rawTargetValue : null;
    const targetUnit = typeof candidate.targetUnit === 'string' && candidate.targetUnit.trim() ? candidate.targetUnit.trim() : trackingMode === 'time' ? 'min' : 'check-ins';
    const rawEntries = candidate.entries ?? candidate.completions;
    const entries = {};
    if (rawEntries && typeof rawEntries === 'object' && !Array.isArray(rawEntries)) {
        for (const [dateKey, value] of Object.entries(rawEntries)){
            const normalizedEntry = normalizeHabitEntry(value, trackingMode);
            if (normalizedEntry !== undefined) {
                entries[dateKey] = normalizedEntry;
            }
        }
    }
    if (!id || !name) {
        return null;
    }
    return {
        id,
        name,
        icon,
        color,
        isMajorTask,
        subtasks,
        trackingMode,
        targetValue,
        targetUnit,
        entries,
        createdAt: typeof candidate.createdAt === 'string' ? candidate.createdAt : new Date().toISOString()
    };
}
function normalizeState(input) {
    if (!input || typeof input !== 'object') {
        return getDefaultState();
    }
    const candidate = input;
    if (!Array.isArray(candidate.habits) || typeof candidate.notes !== 'object' || !candidate.notes) {
        return getDefaultState();
    }
    const habits = candidate.habits.map(normalizeHabit).filter((habit)=>habit !== null);
    const weakList = Array.isArray(candidate.weakList) ? candidate.weakList.map(normalizeWeakListItem).filter((item)=>item !== null) : [];
    const conqueredList = Array.isArray(candidate.conqueredList) ? candidate.conqueredList.map(normalizeConqueredHabit).filter((item)=>item !== null) : [];
    return {
        habits,
        notes: candidate.notes,
        weakList,
        conqueredList
    };
}
function getDefaultState() {
    return {
        habits: HABIT_TEMPLATES.map(createHabit),
        notes: {
            [formatDateKey(TODAY)]: 'Focus on consistency before intensity.'
        },
        weakList: [],
        conqueredList: []
    };
}
function loadCachedState() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return getDefaultState();
        }
        return normalizeState(JSON.parse(raw));
    } catch  {
        return getDefaultState();
    }
}
function loadThemePreference() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const storedTheme = window.localStorage.getItem(THEME_KEY);
    return storedTheme === 'light' ? 'light' : 'dark';
}
async function fetchStateFromServer() {
    const response = await fetch('/api/state', {
        cache: 'no-store'
    });
    if (!response.ok) {
        throw new Error(`Failed to load state (${response.status})`);
    }
    return normalizeState(await response.json());
}
async function saveStateToServer(state) {
    const response = await fetch('/api/state', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        cache: 'no-store',
        body: JSON.stringify(state)
    });
    if (!response.ok) {
        throw new Error(`Failed to save state (${response.status})`);
    }
}
function buildMonthDays(monthAnchor) {
    const year = monthAnchor.getFullYear();
    const month = monthAnchor.getMonth();
    const count = new Date(year, month + 1, 0).getDate();
    return Array.from({
        length: count
    }, (_, index)=>new Date(year, month, index + 1));
}
function countHabitDone(habit, dateKeys) {
    return dateKeys.reduce((total, dateKey)=>total + (isHabitComplete(habit, dateKey) ? 1 : 0), 0);
}
function cloneHabit(habit) {
    return {
        ...habit,
        subtasks: [
            ...habit.subtasks
        ],
        entries: {
            ...habit.entries
        }
    };
}
function createConqueredHabit(habit) {
    return {
        ...cloneHabit(habit),
        conqueredAt: new Date().toISOString()
    };
}
function getAvailableHabitName(name, habits) {
    const usedNames = new Set(habits.map((habit)=>habit.name.trim().toLowerCase()));
    if (!usedNames.has(name.trim().toLowerCase())) {
        return name;
    }
    let index = 2;
    let candidate = `${name} (${index})`;
    while(usedNames.has(candidate.trim().toLowerCase())){
        index += 1;
        candidate = `${name} (${index})`;
    }
    return candidate;
}
function restoreConqueredHabit(conqueredHabit, activeHabits) {
    const restoredHabit = cloneHabit(conqueredHabit);
    if (activeHabits.some((habit)=>habit.id === restoredHabit.id)) {
        restoredHabit.id = crypto.randomUUID();
    }
    restoredHabit.name = getAvailableHabitName(restoredHabit.name, activeHabits);
    return restoredHabit;
}
function stableSerialize(value) {
    if (value === null) {
        return 'null';
    }
    switch(typeof value){
        case 'string':
            return JSON.stringify(value);
        case 'number':
            return Number.isFinite(value) ? String(value) : 'null';
        case 'boolean':
            return value ? 'true' : 'false';
        case 'bigint':
            return JSON.stringify(value.toString());
        case 'undefined':
            return 'null';
        case 'object':
            if (Array.isArray(value)) {
                return `[${value.map((item)=>stableSerialize(item)).join(',')}]`;
            }
            return `{${Object.entries(value).sort(([left], [right])=>left.localeCompare(right)).map(([key, entryValue])=>`${JSON.stringify(key)}:${stableSerialize(entryValue)}`).join(',')}}`;
        default:
            return 'null';
    }
}
function statesEqual(left, right) {
    return stableSerialize(left) === stableSerialize(right);
}
function getHabitEntry(habit, dateKey) {
    return habit.entries[dateKey];
}
function getHabitCompletionRatio(habit, dateKey) {
    const entry = getHabitEntry(habit, dateKey);
    if (habit.trackingMode === 'time') {
        if (typeof entry !== 'number' || entry <= 0) {
            return 0;
        }
        if (habit.targetValue && habit.targetValue > 0) {
            return Math.min(entry / habit.targetValue, 1);
        }
        return 1;
    }
    return entry ? 1 : 0;
}
function isHabitComplete(habit, dateKey) {
    return getHabitCompletionRatio(habit, dateKey) >= 1;
}
function getHabitRecordedAmount(habit, dateKey) {
    const entry = getHabitEntry(habit, dateKey);
    if (habit.trackingMode === 'time') {
        return typeof entry === 'number' ? entry : 0;
    }
    return entry ? 1 : 0;
}
function formatAmount(value) {
    return Number.isInteger(value) ? String(value) : value.toFixed(1);
}
function HabitSubtaskPreview({ habit }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!habit.isMajorTask && habit.subtasks.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "task-plan",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "task-plan-trigger",
                onClick: ()=>setIsOpen((current)=>!current),
                "aria-expanded": isOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "task-plan-kicker",
                                children: "Major task"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 545,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: habit.subtasks.length > 0 ? `${habit.subtasks.length} step plan` : 'No steps yet'
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 546,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 544,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "task-plan-icon",
                        "aria-hidden": "true",
                        children: isOpen ? '-' : '+'
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 548,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this),
            isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "task-plan-panel",
                children: habit.subtasks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    children: habit.subtasks.map((subtask, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: String(index + 1).padStart(2, '0')
                                }, void 0, false, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 559,
                                    columnNumber: 19
                                }, this),
                                subtask
                            ]
                        }, subtask, true, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 558,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/App.tsx",
                    lineNumber: 556,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Add steps from Edit to make this major task easier to execute."
                }, void 0, false, {
                    fileName: "[project]/src/App.tsx",
                    lineNumber: 565,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 554,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/App.tsx",
        lineNumber: 537,
        columnNumber: 5
    }, this);
}
_s(HabitSubtaskPreview, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = HabitSubtaskPreview;
function ProgressChart({ values }) {
    const safeValues = values.length > 1 ? values : [
        0,
        values[0] ?? 0
    ];
    const points = safeValues.map((value, index)=>{
        const x = index / (safeValues.length - 1) * 100;
        const y = 100 - value;
        return `${x},${y}`;
    }).join(' ');
    const area = `0,100 ${points} 100,100`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chart-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Progress curve"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 589,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Daily completion flow"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 590,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 588,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: "A simple month view to spot your drop-offs quickly."
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 592,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 587,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 100 100",
                className: "progress-chart",
                preserveAspectRatio: "none",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "areaFill",
                            x1: "0",
                            x2: "0",
                            y1: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "rgba(152, 214, 108, 0.7)"
                                }, void 0, false, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 598,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "rgba(152, 214, 108, 0.05)"
                                }, void 0, false, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 599,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 597,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 596,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "0",
                        y1: "25",
                        x2: "100",
                        y2: "25"
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 602,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "0",
                        y1: "50",
                        x2: "100",
                        y2: "50"
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "0",
                        y1: "75",
                        x2: "100",
                        y2: "75"
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 604,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: area,
                        fill: "url(#areaFill)"
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 605,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: points
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 606,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 595,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/App.tsx",
        lineNumber: 586,
        columnNumber: 5
    }, this);
}
_c1 = ProgressChart;
function formatShortDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return 'Saved';
    }
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(date);
}
function getConqueredSummary(habit) {
    const entryKeys = Object.keys(habit.entries);
    const activeDays = entryKeys.filter((dateKey)=>getHabitRecordedAmount(habit, dateKey) > 0).length;
    if (habit.trackingMode === 'time') {
        const totalAmount = entryKeys.reduce((total, dateKey)=>total + getHabitRecordedAmount(habit, dateKey), 0);
        return {
            primary: `${formatAmount(totalAmount)} ${habit.targetUnit} logged`,
            secondary: `${activeDays} active days`
        };
    }
    const checkIns = entryKeys.filter((dateKey)=>isHabitComplete(habit, dateKey)).length;
    return {
        primary: `${checkIns} check-ins`,
        secondary: `${activeDays} active days`
    };
}
function ConqueredList({ items, onRestoreItem }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "conquered-list-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Showcase"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 654,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Conquered"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 655,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "muted",
                                children: "Habits you have already carried for a long time."
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 656,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 653,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: [
                            items.length,
                            " saved"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 658,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 652,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "conquered-list-items",
                children: [
                    items.map((item)=>{
                        const summary = getConqueredSummary(item);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "conquered-list-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "conquered-card-top",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "habit-color",
                                            style: {
                                                backgroundColor: item.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 668,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: [
                                                        item.icon,
                                                        " ",
                                                        item.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: summary.primary
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 673,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 669,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 667,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "conquered-card-meta",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: summary.secondary
                                        }, void 0, false, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 678,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Conquered ",
                                                formatShortDate(item.conqueredAt)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 679,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 677,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "ghost-button conquered-restore",
                                    onClick: ()=>onRestoreItem(item.id),
                                    children: "Restore to daily habits"
                                }, void 0, false, {
                                    fileName: "[project]/src/App.tsx",
                                    lineNumber: 682,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/App.tsx",
                            lineNumber: 666,
                            columnNumber: 13
                        }, this);
                    }),
                    items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "conquered-list-empty",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No conquered habits yet."
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 691,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Move a long-running daily habit here when it no longer needs daily tracking."
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 692,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 690,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 661,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/App.tsx",
        lineNumber: 651,
        columnNumber: 5
    }, this);
}
_c2 = ConqueredList;
function App() {
    _s1();
    const [storedState, setStoredState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "App.useState": ()=>getDefaultState()
    }["App.useState"]);
    const [monthAnchor, setMonthAnchor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "App.useState": ()=>new Date(TODAY.getFullYear(), TODAY.getMonth(), 1)
    }["App.useState"]);
    const [selectedDateKey, setSelectedDateKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "App.useState": ()=>formatDateKey(TODAY)
    }["App.useState"]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "App.useState": ()=>getDefaultHabitForm()
    }["App.useState"]);
    const [editingHabitId, setEditingHabitId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [backendStatus, setBackendStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('loading');
    const [themeMode, setThemeMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dark');
    const [themeLoaded, setThemeLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hydrated, setHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSetupDrawerOpen, setSetupDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const storedStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(storedState);
    const lastSyncedStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(storedState);
    const saveInFlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const queuedStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const todayKey = formatDateKey(TODAY);
    const monthDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[monthDays]": ()=>buildMonthDays(monthAnchor)
    }["App.useMemo[monthDays]"], [
        monthAnchor
    ]);
    const monthKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[monthKeys]": ()=>monthDays.map(formatDateKey)
    }["App.useMemo[monthKeys]"], [
        monthDays
    ]);
    const monthLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[monthLabel]": ()=>new Intl.DateTimeFormat('en-US', {
                month: 'long',
                year: 'numeric'
            }).format(monthAnchor)
    }["App.useMemo[monthLabel]"], [
        monthAnchor
    ]);
    const selectedDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[selectedDay]": ()=>monthDays.find({
                "App.useMemo[selectedDay]": (day)=>formatDateKey(day) === selectedDateKey
            }["App.useMemo[selectedDay]"]) ?? monthDays[0] ?? TODAY
    }["App.useMemo[selectedDay]"], [
        monthDays,
        selectedDateKey
    ]);
    const activeSelectedDateKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[activeSelectedDateKey]": ()=>formatDateKey(selectedDay)
    }["App.useMemo[activeSelectedDateKey]"], [
        selectedDay
    ]);
    const selectedDateLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[selectedDateLabel]": ()=>new Intl.DateTimeFormat('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric'
            }).format(selectedDay)
    }["App.useMemo[selectedDateLabel]"], [
        selectedDay
    ]);
    const selectedDateDone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[selectedDateDone]": ()=>storedState.habits.filter({
                "App.useMemo[selectedDateDone]": (habit)=>isHabitComplete(habit, activeSelectedDateKey)
            }["App.useMemo[selectedDateDone]"]).length
    }["App.useMemo[selectedDateDone]"], [
        activeSelectedDateKey,
        storedState.habits
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const storedTheme = loadThemePreference();
            queueMicrotask({
                "App.useEffect": ()=>{
                    setThemeMode(storedTheme);
                    setThemeLoaded(true);
                }
            }["App.useEffect"]);
        }
    }["App.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!themeLoaded) {
                return;
            }
            document.body.dataset.theme = themeMode;
            document.documentElement.style.colorScheme = themeMode;
            window.localStorage.setItem(THEME_KEY, themeMode);
        }
    }["App.useEffect"], [
        themeLoaded,
        themeMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!isSetupDrawerOpen) {
                return;
            }
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            const handleKeyDown = {
                "App.useEffect.handleKeyDown": (event)=>{
                    if (event.key === 'Escape') {
                        setSetupDrawerOpen(false);
                        setEditingHabitId(null);
                        setForm(getDefaultHabitForm());
                    }
                }
            }["App.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "App.useEffect": ()=>{
                    document.body.style.overflow = previousOverflow;
                    window.removeEventListener('keydown', handleKeyDown);
                }
            })["App.useEffect"];
        }
    }["App.useEffect"], [
        isSetupDrawerOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            storedStateRef.current = storedState;
        }
    }["App.useEffect"], [
        storedState
    ]);
    async function flushQueuedSave() {
        if (saveInFlightRef.current || queuedStateRef.current === null) {
            return;
        }
        const nextState = queuedStateRef.current;
        queuedStateRef.current = null;
        saveInFlightRef.current = true;
        setBackendStatus('saving');
        try {
            await saveStateToServer(nextState);
            lastSyncedStateRef.current = nextState;
            setBackendStatus('connected');
        } catch  {
            queuedStateRef.current = nextState;
            setBackendStatus('offline');
        } finally{
            saveInFlightRef.current = false;
            if (queuedStateRef.current !== null && !statesEqual(queuedStateRef.current, lastSyncedStateRef.current)) {
                void flushQueuedSave();
            }
        }
    }
    function commitState(update, options) {
        const currentState = storedStateRef.current;
        const nextState = typeof update === 'function' ? update(currentState) : update;
        if (statesEqual(currentState, nextState)) {
            return;
        }
        storedStateRef.current = nextState;
        setStoredState(nextState);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
        if (options?.sync === false || !hydrated) {
            return;
        }
        queuedStateRef.current = nextState;
        void flushQueuedSave();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            let active = true;
            function applyRemoteState(remoteState) {
                storedStateRef.current = remoteState;
                lastSyncedStateRef.current = remoteState;
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteState));
                setStoredState({
                    "App.useEffect.applyRemoteState": (current)=>statesEqual(current, remoteState) ? current : remoteState
                }["App.useEffect.applyRemoteState"]);
            }
            async function bootstrap() {
                try {
                    const cachedState = loadCachedState();
                    if (!active) {
                        return;
                    }
                    setStoredState(cachedState);
                    storedStateRef.current = cachedState;
                    lastSyncedStateRef.current = cachedState;
                    const remoteState = await fetchStateFromServer();
                    if (!active) {
                        return;
                    }
                    applyRemoteState(remoteState);
                    setBackendStatus('connected');
                } catch  {
                    if (!active) {
                        return;
                    }
                    setBackendStatus('offline');
                    const cachedState = loadCachedState();
                    setStoredState(cachedState);
                    storedStateRef.current = cachedState;
                    lastSyncedStateRef.current = cachedState;
                } finally{
                    if (active) {
                        setHydrated(true);
                    }
                }
            }
            void bootstrap();
            return ({
                "App.useEffect": ()=>{
                    active = false;
                }
            })["App.useEffect"];
        }
    }["App.useEffect"], []);
    const totalHabits = storedState.habits.length;
    const totalSlots = totalHabits * monthDays.length;
    const dailyCompletionScores = monthKeys.map((dateKey)=>storedState.habits.reduce((total, habit)=>total + getHabitCompletionRatio(habit, dateKey), 0));
    const dailyDoneCounts = monthKeys.map((dateKey)=>storedState.habits.reduce((total, habit)=>total + (isHabitComplete(habit, dateKey) ? 1 : 0), 0));
    const completedCount = dailyDoneCounts.reduce((total, value)=>total + value, 0);
    const progressUnits = dailyCompletionScores.reduce((total, value)=>total + value, 0);
    const progressPercent = totalSlots === 0 ? 0 : progressUnits / totalSlots * 100;
    const dailyRates = dailyCompletionScores.map((value)=>totalHabits === 0 ? 0 : value / totalHabits * 100);
    const habitBreakdown = [
        ...storedState.habits
    ].map((habit)=>{
        const done = countHabitDone(habit, monthKeys);
        const totalAmount = monthKeys.reduce((total, dateKey)=>total + getHabitRecordedAmount(habit, dateKey), 0);
        const averageCompletion = monthDays.length === 0 ? 0 : monthKeys.reduce((total, dateKey)=>total + getHabitCompletionRatio(habit, dateKey), 0) / monthDays.length;
        return {
            ...habit,
            done,
            totalAmount,
            rate: averageCompletion * 100
        };
    }).sort((left, right)=>right.done - left.done);
    const bestDayRate = Math.max(...dailyRates, 0);
    const bestDayIndex = dailyRates.findIndex((value)=>value === bestDayRate);
    const bestDayLabel = bestDayRate === 0 || !monthDays[bestDayIndex] ? 'No data' : monthDays[bestDayIndex].toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
    const monthIndex = monthAnchor.getFullYear() * 12 + monthAnchor.getMonth();
    const currentMonthIndex = TODAY.getFullYear() * 12 + TODAY.getMonth();
    const elapsedDays = monthIndex < currentMonthIndex ? monthDays.length : monthIndex === currentMonthIndex ? TODAY.getDate() : 0;
    const activeDays = dailyDoneCounts.slice(0, elapsedDays).filter((value)=>value > 0).length;
    const consistency = elapsedDays === 0 ? 0 : activeDays / elapsedDays * 100;
    const editingHabit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[editingHabit]": ()=>storedState.habits.find({
                "App.useMemo[editingHabit]": (habit)=>habit.id === editingHabitId
            }["App.useMemo[editingHabit]"]) ?? null
    }["App.useMemo[editingHabit]"], [
        editingHabitId,
        storedState.habits
    ]);
    function updateHabitEntry(habitId, dateKey, nextValue) {
        commitState((current)=>({
                ...current,
                habits: current.habits.map((habit)=>{
                    if (habit.id !== habitId) {
                        return habit;
                    }
                    if (nextValue === undefined) {
                        const restEntries = {
                            ...habit.entries
                        };
                        delete restEntries[dateKey];
                        return {
                            ...habit,
                            entries: restEntries
                        };
                    }
                    return {
                        ...habit,
                        entries: {
                            ...habit.entries,
                            [dateKey]: nextValue
                        }
                    };
                })
            }));
    }
    function toggleCompletion(habitId, dateKey) {
        const habit = storedState.habits.find((entry)=>entry.id === habitId);
        if (!habit || habit.trackingMode !== 'check') {
            return;
        }
        const isChecked = Boolean(habit.entries[dateKey]);
        updateHabitEntry(habitId, dateKey, isChecked ? undefined : true);
    }
    function updateDurationEntry(habitId, dateKey, rawValue) {
        const trimmedValue = rawValue.trim();
        if (!trimmedValue) {
            updateHabitEntry(habitId, dateKey, undefined);
            return;
        }
        const numericValue = Number(trimmedValue);
        if (!Number.isFinite(numericValue) || numericValue < 0) {
            return;
        }
        updateHabitEntry(habitId, dateKey, numericValue);
    }
    function beginHabitEdit(habitId) {
        const habit = storedState.habits.find((entry)=>entry.id === habitId);
        if (!habit) {
            return;
        }
        setEditingHabitId(habit.id);
        setForm(getHabitFormFromHabit(habit));
        setSetupDrawerOpen(true);
    }
    function cancelHabitEdit() {
        setEditingHabitId(null);
        setForm(getDefaultHabitForm());
    }
    function openCreateDrawer() {
        cancelHabitEdit();
        setSetupDrawerOpen(true);
    }
    function closeSetupDrawer() {
        setSetupDrawerOpen(false);
        cancelHabitEdit();
    }
    function setMajorTaskMode(isMajorTask) {
        setForm((current)=>({
                ...current,
                isMajorTask,
                subtasks: isMajorTask && current.subtasks.length === 0 ? [
                    ''
                ] : current.subtasks
            }));
    }
    function updateSubtask(index, value) {
        setForm((current)=>({
                ...current,
                subtasks: current.subtasks.map((subtask, subtaskIndex)=>subtaskIndex === index ? value : subtask)
            }));
    }
    function addSubtaskField() {
        setForm((current)=>({
                ...current,
                isMajorTask: true,
                subtasks: [
                    ...current.subtasks,
                    ''
                ]
            }));
    }
    function removeSubtaskField(index) {
        setForm((current)=>{
            const subtasks = current.subtasks.filter((_, subtaskIndex)=>subtaskIndex !== index);
            return {
                ...current,
                subtasks: subtasks.length > 0 ? subtasks : [
                    ''
                ]
            };
        });
    }
    function addHabitFromTemplate(template) {
        commitState((current)=>{
            const exists = current.habits.some((habit)=>habit.name.trim().toLowerCase() === template.name.trim().toLowerCase());
            if (exists) {
                return current;
            }
            return {
                ...current,
                habits: [
                    ...current.habits,
                    createHabit(template)
                ]
            };
        });
    }
    function handleHabitFormSubmit(event) {
        event.preventDefault();
        const trimmedName = form.name.trim();
        if (!trimmedName) {
            return;
        }
        const trackingMode = form.trackingMode;
        const parsedTargetValue = trackingMode === 'time' ? Number(form.targetValue.trim()) : Number.NaN;
        const targetValue = trackingMode === 'time' && Number.isFinite(parsedTargetValue) && parsedTargetValue > 0 ? parsedTargetValue : null;
        const targetUnit = trackingMode === 'time' ? form.targetUnit.trim() || 'min' : 'check-ins';
        const subtasks = form.isMajorTask ? normalizeSubtasks(form.subtasks) : [];
        const isMajorTask = form.isMajorTask || subtasks.length > 0;
        const duplicateHabit = storedState.habits.some((habit)=>habit.id !== editingHabitId && habit.name.trim().toLowerCase() === trimmedName.toLowerCase());
        if (duplicateHabit) {
            return;
        }
        commitState((current)=>{
            if (editingHabitId) {
                return {
                    ...current,
                    habits: current.habits.map((habit)=>{
                        if (habit.id !== editingHabitId) {
                            return habit;
                        }
                        return {
                            ...habit,
                            name: trimmedName,
                            icon: form.icon.trim() || '✨',
                            color: form.color,
                            isMajorTask,
                            subtasks,
                            trackingMode,
                            targetValue,
                            targetUnit,
                            entries: coerceHabitEntriesToMode(habit.entries, trackingMode)
                        };
                    })
                };
            }
            return {
                ...current,
                habits: [
                    ...current.habits,
                    createHabit({
                        name: trimmedName,
                        icon: form.icon.trim() || '✨',
                        color: form.color,
                        isMajorTask,
                        subtasks,
                        trackingMode,
                        targetValue,
                        targetUnit
                    })
                ]
            };
        });
        cancelHabitEdit();
        setSetupDrawerOpen(false);
    }
    function deleteHabit(habitId) {
        commitState((current)=>({
                ...current,
                habits: current.habits.filter((habit)=>habit.id !== habitId)
            }));
        if (editingHabitId === habitId) {
            cancelHabitEdit();
            setSetupDrawerOpen(false);
        }
    }
    function conquerHabit(habitId) {
        commitState((current)=>{
            const habit = current.habits.find((entry)=>entry.id === habitId);
            if (!habit) {
                return current;
            }
            return {
                ...current,
                habits: current.habits.filter((entry)=>entry.id !== habitId),
                conqueredList: current.conqueredList.some((entry)=>entry.id === habitId) ? current.conqueredList : [
                    ...current.conqueredList,
                    createConqueredHabit(habit)
                ]
            };
        });
        if (editingHabitId === habitId) {
            cancelHabitEdit();
        }
    }
    function restoreConqueredItem(itemId) {
        commitState((current)=>{
            const conqueredHabit = current.conqueredList.find((habit)=>habit.id === itemId);
            if (!conqueredHabit) {
                return current;
            }
            return {
                ...current,
                habits: [
                    ...current.habits,
                    restoreConqueredHabit(conqueredHabit, current.habits)
                ],
                conqueredList: current.conqueredList.filter((habit)=>habit.id !== itemId)
            };
        });
    }
    function updateNote(nextValue) {
        commitState((current)=>({
                ...current,
                notes: {
                    ...current.notes,
                    [todayKey]: nextValue
                }
            }));
    }
    function addWeakListItem(item) {
        commitState((current)=>{
            const weakness = item.weakness.trim();
            const futureHabit = item.futureHabit.trim();
            const note = item.note.trim();
            if (!weakness || !futureHabit) {
                return current;
            }
            return {
                ...current,
                weakList: [
                    ...current.weakList,
                    createWeakListItem({
                        weakness,
                        futureHabit,
                        note
                    })
                ]
            };
        });
    }
    function deleteWeakListItem(itemId) {
        commitState((current)=>({
                ...current,
                weakList: current.weakList.filter((item)=>item.id !== itemId)
            }));
    }
    function toggleTheme() {
        setThemeMode((current)=>current === 'dark' ? 'light' : 'dark');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "hero-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: "Habit OS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: "Track tasks daily, tick them off, and see the month move in real time."
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "hero-text",
                                        children: "Built as a clean React tracker inspired by your reference images, but with a sharper dashboard, mobile-friendly layout, and database persistence."
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1238,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "drawer-toggle",
                                        onClick: openCreateDrawer,
                                        children: "Add task / Weak list"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1245,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "theme-toggle",
                                        onClick: toggleTheme,
                                        children: themeMode === 'dark' ? 'Light mode' : 'Dark mode'
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1248,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 1234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-badges",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Monthly grid"
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1255,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: backendStatus === 'connected' ? 'Neon connected' : 'Offline cache'
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: backendStatus === 'saving' ? 'Syncing...' : 'Neon env slot ready'
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1257,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 1254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-stats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Total habits"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1262,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: totalHabits
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1263,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1261,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Conquered"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1266,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: storedState.conqueredList.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1267,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Completed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1270,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: completedCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1271,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-stat accent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Progress"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1274,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            progressPercent.toFixed(1),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1275,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1273,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 1260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 1233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "workspace-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tracker-column",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "control-panel panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "template-box",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-heading",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "eyebrow",
                                                            children: "Quick start"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/App.tsx",
                                                            lineNumber: 1286,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: "One-tap templates"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/App.tsx",
                                                            lineNumber: 1287,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 1285,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1284,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "template-list",
                                                children: HABIT_TEMPLATES.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "template-chip",
                                                        onClick: ()=>addHabitFromTemplate(template),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: template.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1299,
                                                                columnNumber: 21
                                                            }, this),
                                                            template.name
                                                        ]
                                                    }, template.name, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1293,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1291,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1283,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "note-box",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-heading",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "eyebrow",
                                                                children: "Today focus"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1309,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: "Short daily note"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1310,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1308,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "muted",
                                                        children: todayKey
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1312,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1307,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: storedState.notes[todayKey] ?? '',
                                                onChange: (event)=>updateNote(event.target.value),
                                                placeholder: "Write one line about today's priority."
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1315,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1306,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1282,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "tracker-panel panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tracker-toolbar",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "eyebrow",
                                                        children: "Month view"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1326,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: monthLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1327,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1325,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "toolbar-actions",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "ghost-button",
                                                        onClick: ()=>setMonthAnchor(new Date(TODAY.getFullYear(), TODAY.getMonth(), 1)),
                                                        children: "Current month"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1331,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "month-switcher",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "ghost-button square",
                                                                onClick: ()=>setMonthAnchor((current)=>new Date(current.getFullYear(), current.getMonth() - 1, 1)),
                                                                "aria-label": "Previous month",
                                                                children: "←"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1339,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "ghost-button square",
                                                                onClick: ()=>setMonthAnchor((current)=>new Date(current.getFullYear(), current.getMonth() + 1, 1)),
                                                                "aria-label": "Next month",
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1349,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1338,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1330,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tracker-table-wrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "tracker-table",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "habit-column",
                                                                children: "My habits"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1367,
                                                                columnNumber: 21
                                                            }, this),
                                                            monthDays.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: day.toLocaleDateString('en-US', {
                                                                                weekday: 'short'
                                                                            }).slice(0, 2)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/App.tsx",
                                                                            lineNumber: 1370,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: day.getDate()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/App.tsx",
                                                                            lineNumber: 1371,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, formatDateKey(day), true, {
                                                                    fileName: "[project]/src/App.tsx",
                                                                    lineNumber: 1369,
                                                                    columnNumber: 21
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1366,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 1365,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: storedState.habits.map((habit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "habit-cell",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "habit-label",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "habit-color",
                                                                                    style: {
                                                                                        backgroundColor: habit.color
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/App.tsx",
                                                                                    lineNumber: 1382,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            children: [
                                                                                                habit.icon,
                                                                                                " ",
                                                                                                habit.name
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/App.tsx",
                                                                                            lineNumber: 1384,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                            children: habit.trackingMode === 'time' ? `${formatAmount(monthKeys.reduce((total, dateKey)=>total + getHabitRecordedAmount(habit, dateKey), 0))} ${habit.targetUnit} logged` : `${countHabitDone(habit, monthKeys)} check-ins`
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/App.tsx",
                                                                                            lineNumber: 1387,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HabitSubtaskPreview, {
                                                                                            habit: habit
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/App.tsx",
                                                                                            lineNumber: 1392,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/App.tsx",
                                                                                    lineNumber: 1383,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/App.tsx",
                                                                            lineNumber: 1381,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "habit-actions",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    className: "edit-button",
                                                                                    onClick: ()=>beginHabitEdit(habit.id),
                                                                                    "aria-label": `Edit ${habit.name}`,
                                                                                    children: "Edit"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/App.tsx",
                                                                                    lineNumber: 1397,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    className: "delete-button",
                                                                                    onClick: ()=>deleteHabit(habit.id),
                                                                                    "aria-label": `Delete ${habit.name}`,
                                                                                    children: "×"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/App.tsx",
                                                                                    lineNumber: 1406,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/App.tsx",
                                                                            lineNumber: 1396,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/App.tsx",
                                                                    lineNumber: 1380,
                                                                    columnNumber: 23
                                                                }, this),
                                                                monthKeys.map((dateKey)=>{
                                                                    const entry = getHabitEntry(habit, dateKey);
                                                                    const checked = Boolean(entry);
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: habit.trackingMode === 'time' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "time-cell",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "number",
                                                                                    min: "0",
                                                                                    step: "5",
                                                                                    inputMode: "numeric",
                                                                                    value: typeof entry === 'number' ? entry : '',
                                                                                    onChange: (event)=>updateDurationEntry(habit.id, dateKey, event.target.value),
                                                                                    "aria-label": `Set time for ${habit.name} on ${dateKey}`,
                                                                                    placeholder: "0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/App.tsx",
                                                                                    lineNumber: 1424,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: habit.targetUnit
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/App.tsx",
                                                                                    lineNumber: 1434,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/App.tsx",
                                                                            lineNumber: 1423,
                                                                            columnNumber: 31
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            className: checked ? 'check-button checked' : 'check-button',
                                                                            onClick: ()=>toggleCompletion(habit.id, dateKey),
                                                                            "aria-pressed": checked,
                                                                            "aria-label": `${checked ? 'Unmark' : 'Mark'} ${habit.name} for ${dateKey}`,
                                                                            children: checked ? '✓' : ''
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/App.tsx",
                                                                            lineNumber: 1437,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, dateKey, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1421,
                                                                        columnNumber: 27
                                                                    }, this);
                                                                })
                                                            ]
                                                        }, habit.id, true, {
                                                            fileName: "[project]/src/App.tsx",
                                                            lineNumber: 1379,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 1377,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: "Progress"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/App.tsx",
                                                                    lineNumber: 1456,
                                                                    columnNumber: 21
                                                                }, this),
                                                                dailyRates.map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: [
                                                                            Math.round(value),
                                                                            "%"
                                                                        ]
                                                                    }, `${monthKeys[index]}-progress`, true, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1458,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/App.tsx",
                                                            lineNumber: 1455,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: "Done"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/App.tsx",
                                                                    lineNumber: 1462,
                                                                    columnNumber: 21
                                                                }, this),
                                                                dailyDoneCounts.map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: value
                                                                    }, `${monthKeys[index]}-done`, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1464,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/App.tsx",
                                                            lineNumber: 1461,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: "Not done"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/App.tsx",
                                                                    lineNumber: 1468,
                                                                    columnNumber: 21
                                                                }, this),
                                                                dailyDoneCounts.map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: Math.max(totalHabits - value, 0)
                                                                    }, `${monthKeys[index]}-not-done`, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1470,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/App.tsx",
                                                            lineNumber: 1467,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 1454,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 1364,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1363,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mobile-calendar",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mobile-calendar-strip",
                                                "aria-label": `${monthLabel} day selector`,
                                                children: monthDays.map((day)=>{
                                                    const dateKey = formatDateKey(day);
                                                    const isSelected = dateKey === activeSelectedDateKey;
                                                    const completed = storedState.habits.filter((habit)=>isHabitComplete(habit, dateKey)).length;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: isSelected ? 'mobile-day-chip active' : 'mobile-day-chip',
                                                        onClick: ()=>setSelectedDateKey(dateKey),
                                                        "aria-pressed": isSelected,
                                                        "aria-label": `${day.toLocaleDateString('en-US', {
                                                            weekday: 'long',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}, ${completed} of ${totalHabits} habits complete`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: day.toLocaleDateString('en-US', {
                                                                    weekday: 'short'
                                                                }).slice(0, 2)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1497,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: day.getDate()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1498,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: [
                                                                    completed,
                                                                    "/",
                                                                    totalHabits
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1499,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, dateKey, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1485,
                                                        columnNumber: 19
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1478,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mobile-day-panel",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "section-heading mobile-day-heading",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "eyebrow",
                                                                        children: "Mobile day view"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1508,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        children: selectedDateLabel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1509,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1507,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "muted",
                                                                children: [
                                                                    selectedDateDone,
                                                                    "/",
                                                                    totalHabits,
                                                                    " done"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1511,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1506,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mobile-habit-list",
                                                        children: storedState.habits.map((habit)=>{
                                                            const entry = getHabitEntry(habit, activeSelectedDateKey);
                                                            const checked = Boolean(entry);
                                                            return habit.trackingMode === 'time' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mobile-habit-row time",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mobile-habit-label",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "habit-color",
                                                                                style: {
                                                                                    backgroundColor: habit.color
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/App.tsx",
                                                                                lineNumber: 1524,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: [
                                                                                            habit.icon,
                                                                                            " ",
                                                                                            habit.name
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/App.tsx",
                                                                                        lineNumber: 1526,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                        children: checked ? `${formatAmount(typeof entry === 'number' ? entry : 0)} ${habit.targetUnit} today` : 'Enter time spent today'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/App.tsx",
                                                                                        lineNumber: 1529,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HabitSubtaskPreview, {
                                                                                        habit: habit
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/App.tsx",
                                                                                        lineNumber: 1534,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/App.tsx",
                                                                                lineNumber: 1525,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1523,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mobile-habit-actions",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: "edit-button mobile-edit-button",
                                                                                onClick: ()=>beginHabitEdit(habit.id),
                                                                                "aria-label": `Edit ${habit.name}`,
                                                                                children: "Edit"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/App.tsx",
                                                                                lineNumber: 1539,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "mobile-time-entry",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "number",
                                                                                        min: "0",
                                                                                        step: "5",
                                                                                        inputMode: "numeric",
                                                                                        value: typeof entry === 'number' ? entry : '',
                                                                                        onChange: (event)=>updateDurationEntry(habit.id, activeSelectedDateKey, event.target.value),
                                                                                        "aria-label": `Set time for ${habit.name} on ${selectedDateLabel}`,
                                                                                        placeholder: "0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/App.tsx",
                                                                                        lineNumber: 1549,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: habit.targetUnit
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/App.tsx",
                                                                                        lineNumber: 1561,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/App.tsx",
                                                                                lineNumber: 1548,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1538,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, `${habit.id}-${activeSelectedDateKey}`, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1522,
                                                                columnNumber: 23
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: checked ? 'mobile-habit-row checked' : 'mobile-habit-row',
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mobile-habit-label",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "habit-color",
                                                                                style: {
                                                                                    backgroundColor: habit.color
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/App.tsx",
                                                                                lineNumber: 1568,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: [
                                                                                            habit.icon,
                                                                                            " ",
                                                                                            habit.name
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/App.tsx",
                                                                                        lineNumber: 1570,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                        children: checked ? 'Done today' : 'Tap the check to mark done'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/App.tsx",
                                                                                        lineNumber: 1573,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HabitSubtaskPreview, {
                                                                                        habit: habit
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/App.tsx",
                                                                                        lineNumber: 1574,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/App.tsx",
                                                                                lineNumber: 1569,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1567,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mobile-habit-actions",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: "edit-button mobile-edit-button",
                                                                                onClick: ()=>beginHabitEdit(habit.id),
                                                                                "aria-label": `Edit ${habit.name}`,
                                                                                children: "Edit"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/App.tsx",
                                                                                lineNumber: 1579,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: checked ? 'mobile-habit-toggle checked' : 'mobile-habit-toggle',
                                                                                onClick: ()=>toggleCompletion(habit.id, activeSelectedDateKey),
                                                                                "aria-pressed": checked,
                                                                                "aria-label": `${checked ? 'Unmark' : 'Mark'} ${habit.name} for ${selectedDateLabel}`,
                                                                                children: checked ? '✓' : ''
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/App.tsx",
                                                                                lineNumber: 1588,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1578,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, `${habit.id}-${activeSelectedDateKey}`, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1566,
                                                                columnNumber: 23
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1516,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1505,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1477,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressChart, {
                                        values: dailyRates
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1606,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1323,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "insights-panel panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-heading",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "eyebrow",
                                                    children: "Analytics"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 1612,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Progress snapshot"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 1613,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/App.tsx",
                                            lineNumber: 1611,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1610,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "progress-summary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "progress-meter",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "progress-fill",
                                                    style: {
                                                        width: `${progressPercent}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 1619,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1618,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "summary-grid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    consistency.toFixed(0),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1623,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Consistency"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1624,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1622,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: bestDayLabel
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1627,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Best day"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1628,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1626,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: activeDays
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1631,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Active days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1632,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1630,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1621,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1617,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "analysis-list",
                                        children: [
                                            habitBreakdown.map((habit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: "analysis-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "analysis-copy",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: [
                                                                        habit.icon,
                                                                        " ",
                                                                        habit.name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/App.tsx",
                                                                    lineNumber: 1641,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: habit.trackingMode === 'time' ? `${formatAmount(habit.totalAmount)} ${habit.targetUnit} total` : `${habit.done}/${monthDays.length} days`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/App.tsx",
                                                                    lineNumber: 1644,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/App.tsx",
                                                            lineNumber: 1640,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mini-bar",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mini-bar-fill",
                                                                style: {
                                                                    width: `${habit.rate}%`,
                                                                    backgroundColor: habit.color
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1651,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/App.tsx",
                                                            lineNumber: 1650,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, habit.id, true, {
                                                    fileName: "[project]/src/App.tsx",
                                                    lineNumber: 1639,
                                                    columnNumber: 17
                                                }, this)),
                                            habitBreakdown.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "muted",
                                                children: "Add your first habit to start tracking."
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1656,
                                                columnNumber: 46
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1637,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "neon-box",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "Backend note"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1660,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Neon database is wired through the backend."
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1661,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "muted",
                                                children: "The app now loads and saves habit state through a Postgres API, with local cache fallback if the backend is unavailable."
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1662,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1659,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1609,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 1281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "weak-column side-rail",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeakList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                items: storedState.weakList,
                                onDeleteItem: deleteWeakListItem
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1671,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConqueredList, {
                                items: storedState.conqueredList,
                                onRestoreItem: restoreConqueredItem
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1672,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 1670,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 1280,
                columnNumber: 7
            }, this),
            isSetupDrawerOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "setup-drawer-layer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "setup-drawer-backdrop",
                        onClick: closeSetupDrawer,
                        "aria-label": "Close setup drawer"
                    }, void 0, false, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 1678,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "setup-drawer",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-labelledby": "setup-drawer-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "drawer-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "Right drawer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1688,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                id: "setup-drawer-title",
                                                children: "Create or plan habits"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1689,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "muted",
                                                children: "Add today's habit or save a future improvement in the Weak List."
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1690,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1687,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "drawer-close",
                                        onClick: closeSetupDrawer,
                                        "aria-label": "Close drawer",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1693,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1686,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "drawer-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-heading",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "eyebrow",
                                                        children: editingHabit ? 'Edit a task' : 'Add a task'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1701,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: editingHabit ? `Editing ${editingHabit.name}` : 'Create a new habit'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1702,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1700,
                                                columnNumber: 17
                                            }, this),
                                            editingHabit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "ghost-button",
                                                onClick: cancelHabitEdit,
                                                children: "Cancel edit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1705,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1699,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: "habit-form",
                                        onSubmit: handleHabitFormSubmit,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Habit name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1713,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: form.name,
                                                        onChange: (event)=>setForm((current)=>({
                                                                    ...current,
                                                                    name: event.target.value
                                                                })),
                                                        placeholder: "Example: No sugar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1714,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1712,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "task-structure-panel",
                                                "aria-label": "Task structure",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "task-structure-header",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "label-title",
                                                                        children: "Task structure"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1724,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "muted",
                                                                        children: "Choose whether this is one trackable habit or a larger task with steps."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1725,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1723,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "task-structure-count",
                                                                children: form.isMajorTask ? `${normalizeSubtasks(form.subtasks).length} steps` : 'Simple'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1727,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1722,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "task-type-grid",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: form.isMajorTask ? 'task-type-card' : 'task-type-card active',
                                                                onClick: ()=>setMajorTaskMode(false),
                                                                "aria-pressed": !form.isMajorTask,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Single"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1739,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Habit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1740,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: "One behavior, one tracker row."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1741,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1733,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: form.isMajorTask ? 'task-type-card active' : 'task-type-card',
                                                                onClick: ()=>setMajorTaskMode(true),
                                                                "aria-pressed": form.isMajorTask,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Major"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1749,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Task"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1750,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: "One main task with steps below."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1751,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1743,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1732,
                                                        columnNumber: 19
                                                    }, this),
                                                    form.isMajorTask ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "subtask-composer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "subtask-composer-header",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Build the step list"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/App.tsx",
                                                                                lineNumber: 1759,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                children: "Each row becomes one subtask in the accordion."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/App.tsx",
                                                                                lineNumber: 1760,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1758,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: "subtask-add-button",
                                                                        onClick: addSubtaskField,
                                                                        children: "Add step"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1762,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1757,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "subtask-card-list",
                                                                children: form.subtasks.map((subtask, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "subtask-card",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "subtask-step",
                                                                                children: [
                                                                                    "Step ",
                                                                                    String(index + 1).padStart(2, '0')
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/App.tsx",
                                                                                lineNumber: 1770,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                value: subtask,
                                                                                onChange: (event)=>updateSubtask(index, event.target.value),
                                                                                placeholder: index === 0 ? 'Research the topic' : index === 1 ? 'Create the first draft' : 'Define the next clear action'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/App.tsx",
                                                                                lineNumber: 1771,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: "subtask-remove",
                                                                                onClick: ()=>removeSubtaskField(index),
                                                                                "aria-label": `Remove step ${index + 1}`,
                                                                                children: "×"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/App.tsx",
                                                                                lineNumber: 1782,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, `subtask-${index}`, true, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1769,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1767,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1756,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "task-structure-note",
                                                        children: "Use Major Task only when you need a checklist under the main tracker item."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1795,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1721,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Icon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1803,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: form.icon,
                                                                onChange: (event)=>setForm((current)=>({
                                                                            ...current,
                                                                            icon: event.target.value
                                                                        })),
                                                                maxLength: 2,
                                                                placeholder: "✨"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1804,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1802,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "label-title",
                                                                children: "Color"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1813,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "swatches",
                                                                role: "list",
                                                                "aria-label": "Habit colors",
                                                                children: COLOR_SWATCHES.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: form.color === color ? 'swatch active' : 'swatch',
                                                                        style: {
                                                                            backgroundColor: color
                                                                        },
                                                                        onClick: ()=>setForm((current)=>({
                                                                                    ...current,
                                                                                    color
                                                                                })),
                                                                        "aria-label": `Select ${color}`
                                                                    }, color, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1816,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1814,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1812,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1801,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-grid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Tracking"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1831,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: form.trackingMode,
                                                                onChange: (event)=>setForm((current)=>({
                                                                            ...current,
                                                                            trackingMode: event.target.value
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "check",
                                                                        children: "Check-in"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1841,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "time",
                                                                        children: "Time spent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1842,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1832,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/App.tsx",
                                                        lineNumber: 1830,
                                                        columnNumber: 19
                                                    }, this),
                                                    form.trackingMode === 'time' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Target / day"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1849,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "0",
                                                                        step: "5",
                                                                        value: form.targetValue,
                                                                        onChange: (event)=>setForm((current)=>({
                                                                                    ...current,
                                                                                    targetValue: event.target.value
                                                                                })),
                                                                        placeholder: "60"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1850,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1848,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Unit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1861,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        value: form.targetUnit,
                                                                        onChange: (event)=>setForm((current)=>({
                                                                                    ...current,
                                                                                    targetUnit: event.target.value
                                                                                })),
                                                                        placeholder: "min"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/App.tsx",
                                                                        lineNumber: 1862,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/App.tsx",
                                                                lineNumber: 1860,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1829,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "primary-button",
                                                children: editingHabit ? 'Save changes' : 'Add habit'
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1872,
                                                columnNumber: 17
                                            }, this),
                                            editingHabit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "conquer-button",
                                                onClick: ()=>conquerHabit(editingHabit.id),
                                                children: "Move to Conquered"
                                            }, void 0, false, {
                                                fileName: "[project]/src/App.tsx",
                                                lineNumber: 1877,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/App.tsx",
                                        lineNumber: 1711,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1698,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeakListEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onAddItem: addWeakListItem
                            }, void 0, false, {
                                fileName: "[project]/src/App.tsx",
                                lineNumber: 1888,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/App.tsx",
                        lineNumber: 1685,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 1677,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/App.tsx",
        lineNumber: 1232,
        columnNumber: 5
    }, this);
}
_s1(App, "Z1Z4IE+rHRy5aZrLxhhrJSd9+K4=");
_c3 = App;
const __TURBOPACK__default__export__ = App;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "HabitSubtaskPreview");
__turbopack_context__.k.register(_c1, "ProgressChart");
__turbopack_context__.k.register(_c2, "ConqueredList");
__turbopack_context__.k.register(_c3, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0liaj-5._.js.map