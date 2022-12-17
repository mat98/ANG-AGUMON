import { Injectable } from "@angular/core";

export interface CertificateItem {
    name: string,
    year: string,
    educationInstitution: string,
    technology: string
}

export class CertificateModel implements CertificateItem {
    public name: string;
    public year: string;
    public educationInstitution: string;
    public technology: string;

    constructor(name: string, year: string, educationInstitution: string, technology: string) {
        this.name = name;
        this.year = year;
        this.educationInstitution = educationInstitution;
        this.technology = technology;
    }

}