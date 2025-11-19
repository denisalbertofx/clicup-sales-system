/**
 * Opens the demo form modal
 */
export function openDemoForm() {
    if (typeof window !== "undefined" && window.openDemoModal) {
        window.openDemoModal();
    }
}
