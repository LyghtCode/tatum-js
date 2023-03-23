/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BlockAmount = {
    /**
     * The amount to be blocked on the account
     */
    amount: string;
    /**
     * The type of the blockage that you are applying; can be a code or an identifier from an external system or a short description of the blockage
     */
    type: string;
    /**
     * The description of the blockage that you are applying
     */
    description?: string;
}
