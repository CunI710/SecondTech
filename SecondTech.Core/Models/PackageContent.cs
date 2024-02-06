namespace SecondTech.Core.Models
{
    public class PackageContent
    {
        public Guid Id { get; set; }
        public string? Content { get; set; }
        public Category? Category { get; set; }
    }
}