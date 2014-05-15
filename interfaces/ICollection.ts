module Collections
{
    export interface ICollection<T>
    {
        Count: number;

        Add(item:T);
        Clear();
        Contains(item:T) : boolean;
        Remove(item:T): boolean;
    }
}