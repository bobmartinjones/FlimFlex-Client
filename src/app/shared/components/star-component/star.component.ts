import {Component, OnInit, Input, Output, EventEmitter, HostListener, forwardRef, NgModule} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
    selector: "rating",
    templateUrl: './star.component.html',
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => Rating), multi: true },
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => Rating), multi: true },
    ],
    styleUrls: ['./star.component.css']
})
export class Rating implements OnInit, ControlValueAccessor, Validator {

    public iconClass = "star-icon";

    public fullIcon = "★";

    public emptyIcon = "☆";

    public float = true;

    @Input()
    required: boolean;

    @Output()
    onHover = new EventEmitter();

    @Output()
    onLeave = new EventEmitter();

    model: number;
    ratingRange: number[];
    hovered: number = 0;
    hoveredPercent: number = undefined;

    private max: number = 5;
    private onChange: (m: any) => void;
    private onTouched: (m: any) => void;

    writeValue(value: number): void {
        /*if (value % 1 !== value) {
         this.model = Math.round(value);
         return;
         }*/

        this.model = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    validate(c: AbstractControl) {
        if (this.required && !c.value) {
            return {
                required: true
            };
        }
        return null;
    }

    ngOnInit() {
        this.buildRanges();
    }

    calculateWidth(item: number) {
        if (this.hovered > 0) {
            if (this.hoveredPercent !== undefined && this.hovered === item)
                return this.hoveredPercent;

            return this.hovered >= item ? 100 : 0;
        }
        return this.model >= item ? 100 : 100 - Math.round((item - this.model) * 10) * 10;
    }

    setHovered(hovered: number): void {
            this.hovered = hovered;
            this.onHover.emit(hovered);
    }

    changeHovered(event: MouseEvent): void {
        if (!this.float) return;
        const target = event.target as HTMLElement;
        const relativeX = event.pageX - target.offsetLeft;
        const percent = Math.round((relativeX * 100 / target.offsetWidth) / 10) * 10;
        this.hoveredPercent = percent > 50 ? 100 : 50;
    }

    resetHovered() {
        this.hovered = 0;
        this.hoveredPercent = undefined;
        this.onLeave.emit(this.hovered);
    }

    rate(value: number) {
        if (value >= 0 && value <= this.ratingRange.length) {
            const newValue = this.hoveredPercent ? (value - 1) + this.hoveredPercent / 100 : value;
            this.onChange(newValue);
            this.model = newValue;
        }
    }

    private buildRanges() {
        this.ratingRange = this.range(1, this.max);
    }

    private range(start: number, end: number) {
        const n: number[] = [];
        for (let i = start; i <= end; i++) {
            n.push(i);
        }
        return n;
    }
}

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Rating,
    ],
    exports: [
        Rating,
    ],
})

export class RatingModule {
}